import * as mbst from 'mobx-state-tree';
import { DeepReadonly, SinglePropertyObject } from './utils';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// S = Snapshot,
// M = Model (readonly, protected mode),
// WM = Model (writeable, for actions/unprotected mode),

export type IProtectedStateTreeNode<S, M, WM> = M & mbst.IStateTreeNode & { readonly $_protected?: true };
export type IUnprotectedStateTreeNode<S, M, WM> = WM & mbst.IStateTreeNode & { readonly $_unprotected?: true };

// only use these type as input, never as output
export type IStateTreeNode<S, M, WM> = IUnprotectedStateTreeNode<S, M, WM> | IProtectedStateTreeNode<S, M, WM>;

export type IType<S, M, WM> = {
  // types
  SnapshotType: S;

  // TODO: node instances of simple types cannot be snap-shotted
  Type: IProtectedStateTreeNode<S, M, WM>;
  ProtectedType: IProtectedStateTreeNode<S, M, WM>;
  UnprotectedType: IUnprotectedStateTreeNode<S, M, WM>;

  readonly name: string;
  create(snapshot?: S, environment?: any): IProtectedStateTreeNode<S, M, WM>;
};

export type ISimpleType<T> = IType<
  T, // S
  DeepReadonly<T>, // M
  T // WM
  >;

export type IComplexType<S, M, WM> = IType<S , M , WM > & {
  // TODO: node instances of complex types can be snap-shotted

  create(snapshot?: S , environment?: any): IProtectedStateTreeNode<S, M, WM>;
};

export type IModelType<S, M, WM> /* extends mbst.IModelType<S, WM> */ = IComplexType<S , M , WM > & {
  named(newName: string): IModelType<S, M, WM>;

  // no props, use prop, optProp or maybeProp instead

  // needs implementation
  prop<TPropName extends string, S1, M1, WM1>(pname: TPropName, type: IType<S1, M1, WM1>):
    IModelType<
      S & SinglePropertyObject<TPropName, S1>,
      M & Readonly<SinglePropertyObject<TPropName, IProtectedStateTreeNode<S1, M1, WM1>>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, IUnprotectedStateTreeNode<S1, M1, WM1>>
      >;

  // needs implementation
  optProp<TPropName extends string, S1, M1, WM1>(pname: TPropName, type: IType<S1, M1, WM1>, defValue: S1 | (() => S1)):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1>>,
      M & Readonly<SinglePropertyObject<TPropName, IProtectedStateTreeNode<S1, M1, WM1>>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, IUnprotectedStateTreeNode<S1, M1, WM1>>
      >;

  // needs implementation
  maybeProp<TPropName extends string, S1, M1, WM1>(pname: TPropName, type: IType<S1, M1, WM1>):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1 | null>>,
      M & Readonly<SinglePropertyObject<TPropName, IProtectedStateTreeNode<S1, M1, WM1> | null>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, IUnprotectedStateTreeNode<S1, M1, WM1> | null>
      >;

  preProcessSnapshot(fn: (snapshot: S) => S): IModelType<S, M, WM>;

  views<ExtraV extends object>(f: (self: IProtectedStateTreeNode<S, M, WM>) => ExtraV):
    IModelType<
      S,
      M & ExtraV,
      WM & ExtraV
      >;

  // tslint:disable-next-line:ban-types
  actions<ExtraA extends { [name: string]: Function }>(f: (self: IUnprotectedStateTreeNode<S, M, WM>) => ExtraA):
    IModelType<
      S,
      M & ExtraA,
      WM & ExtraA
      >;
};
