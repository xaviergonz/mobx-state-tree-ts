import * as mbst from 'mobx-state-tree';
import { DeepReadonly, SinglePropertyObject } from './utils';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// S = Snapshot,
// M = Model (readonly, protected mode),
// WM = Model (writeable, for actions/unprotected mode),

export type STag = { readonly $_snapshot?: true };
export type MTag = { readonly $_model?: true };
export type WMTag = { readonly $_writeModel?: true };

export type IProtectedStateTreeNode<S extends STag, M extends MTag, WM extends WMTag> = M & MTag & mbst.IStateTreeNode & { readonly $_protected?: true };
export type IUnprotectedStateTreeNode<S extends STag, M extends MTag, WM extends WMTag> = WM & WMTag & mbst.IStateTreeNode & { readonly $_unprotected?: true };

// only use these type as input, never as output
export type IStateTreeNode<S extends STag, M extends MTag, WM extends WMTag> = IUnprotectedStateTreeNode<S, M, WM> | IProtectedStateTreeNode<S, M, WM>;

export type IType<S extends STag, M extends MTag, WM extends WMTag> = {
  // types
  ModelType: IOutType<S, M, WM>;
  SnapshotType: S & STag;

  // TODO: simple types cannot be snap-shotted
  ReadonlyNodeType: IProtectedStateTreeNode<S, M, WM>;
  WriteNodeType: IUnprotectedStateTreeNode<S, M, WM>;

  readonly name: string;
  create(snapshot?: S, environment?: any): IProtectedStateTreeNode<S & STag, M & MTag, WM & WMTag>;
};

export type ISimpleType<T> = IType<
  T & STag, // S
  DeepReadonly<T> & MTag, // M
  T & WMTag // WM
  >;

export type IComplexType<S extends STag, M extends MTag, WM extends WMTag> = IType<S & STag, M & MTag, WM & WMTag> & {
  // TODO: complex types can be snap-shotted
  ReadonlyNodeType: IProtectedStateTreeNode<S, M, WM>;
  WriteNodeType: IUnprotectedStateTreeNode<S, M, WM>;

  create(snapshot?: S & STag, environment?: any): IProtectedStateTreeNode<S, M, WM>;
};

export type IModelType<S extends STag, M extends MTag, WM extends WMTag> /* extends mbst.IModelType<S, WM> */ = IComplexType<S & STag, M & MTag, WM & WMTag> & {
  named(newName: string): IOutModelType<S, M, WM>;

  // no props, use prop, optProp or maybeProp instead

  // needs implementation
  prop<TPropName extends string, S1, M1, WM1>(pname: TPropName, type: IType<S1, M1, WM1>):
    IOutModelType<
      S & SinglePropertyObject<TPropName, S1>,
      M & Readonly<SinglePropertyObject<TPropName, IProtectedStateTreeNode<S1, M1, WM1>>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, IUnprotectedStateTreeNode<S1, M1, WM1>>
      >;

  // needs implementation
  optProp<TPropName extends string, S1, M1, WM1>(pname: TPropName, type: IType<S1, M1, WM1>, defValue: S1 | (() => S1)):
    IOutModelType<
      S & Partial<SinglePropertyObject<TPropName, S1>>,
      M & Readonly<SinglePropertyObject<TPropName, IProtectedStateTreeNode<S1, M1, WM1>>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, IUnprotectedStateTreeNode<S1, M1, WM1>>
      >;

  // needs implementation
  maybeProp<TPropName extends string, S1, M1, WM1>(pname: TPropName, type: IType<S1, M1, WM1>):
    IOutModelType<
      S & Partial<SinglePropertyObject<TPropName, S1 | null>>,
      M & Readonly<SinglePropertyObject<TPropName, IProtectedStateTreeNode<S1, M1, WM1> | null>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, IUnprotectedStateTreeNode<S1, M1, WM1> | null>
      >;

  preProcessSnapshot(fn: (snapshot: S) => S & STag): IOutModelType<S, M, WM>;

  views<ExtraV extends object>(f: (self: IProtectedStateTreeNode<S, M, WM>) => ExtraV):
    IOutModelType<
      S,
      M & ExtraV,
      WM & ExtraV
      >;

  // tslint:disable-next-line:ban-types
  actions<ExtraA extends { [name: string]: Function }>(f: (self: IUnprotectedStateTreeNode<S, M, WM>) => ExtraA):
    IOutModelType<
      S,
      M & ExtraA,
      WM & ExtraA
      >;
};

export type IOutType<S, M, WM> = IType<S & STag, M & MTag, WM & WMTag>;
export type IOutComplexType<S, M, WM> = IComplexType<S & STag, M & MTag, WM & WMTag>;
export type IOutModelType<S, M, WM> = IModelType<S & STag, M & MTag, WM & WMTag>;
