import * as mbst from 'mobx-state-tree';
import { DeepReadonly, SinglePropertyObject } from './utils';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// S = Snapshot,
// M = Model (readonly),
// WM = Model (writeable, for actions/unprotected),
// V = Views (readonly),
// A = Actions (readonly),

export type IProtectedStateTreeNode<S, M, WM, V, A> = M & V & A & mbst.IStateTreeNode;
export type IUnprotectedStateTreeNode<S, M, WM, V, A> = WM & V & A & mbst.IStateTreeNode;

// only use these type as input, never as output
export type IStateTreeNode<S, M, WM, V, A> = IProtectedStateTreeNode<S, M, WM, V, A> | IUnprotectedStateTreeNode<S, M, WM, V, A>;

export type IType<S, M, WM, V, A> = {
  // types
  SnapshotType: S;
  ModelType: M;
  WriteableModelType: WM;
  ViewsType: V;
  ActionsType: A;
  Type: IType<S, M, WM, V, A>;

  // TODO: simple types cannot be snapshotted
  Node: IProtectedStateTreeNode<S, M, WM, V, A>;
  WriteableNode: IUnprotectedStateTreeNode<S, M, WM, V, A>;

  readonly name: string;
  create(snapshot?: S, environment?: any): IProtectedStateTreeNode<S, M, WM, V, A>;
};

export type ISimpleType<T> = IType<
  T, // S
  DeepReadonly<T>, // M
  T, // WM
  {}, // V
  {} // A
  >;

export type IComplexType<S, M, WM, V, A> = IType<S, M, WM, V, A> & {
  // TODO: complex types can be snapshoted
  Node: IProtectedStateTreeNode<S, M, WM, V, A>;
  WriteableNode: IUnprotectedStateTreeNode<S, M, WM, V, A>;

  create(snapshot?: S, environment?: any): IProtectedStateTreeNode<S, M, WM, V, A>;
};

export type IModelType<S, M, WM, V, A> /* extends mbst.IModelType<S, WM & V & A> */ = IComplexType<S, M, WM, V, A> & {
  named(newName: string): IModelType<S, M, WM, V, A>;

  // no props, use prop, optProp or maybeProp instead

  // needs implementation
  prop<TPropName extends string, S1, M1, WM1, V1, A1>(pname: TPropName, type: IType<S1, M1, WM1, V1, A1>):
    IModelType<
      S & SinglePropertyObject<TPropName, S1>,
      M & Readonly<SinglePropertyObject<TPropName, M1>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, WM1>,
      V & SinglePropertyObject<TPropName, V1>,
      A & SinglePropertyObject<TPropName, A1>
      >;

  // needs implementation
  optProp<TPropName extends string, S1, M1, WM1, V1, A1>(pname: TPropName, type: IType<S1, M1, WM1, V1, A1>, defValue: S1 | (() => S1)):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1>>,
      M & Readonly<SinglePropertyObject<TPropName, M1>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, WM1>,
      V & SinglePropertyObject<TPropName, V1>,
      A & SinglePropertyObject<TPropName, A1>
      >;

  // needs implementation
  maybeProp<TPropName extends string, S1, M1, WM1, V1, A1>(pname: TPropName, type: IType<S1, M1, WM1, V1, A1>):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1 | null>>,
      M & Readonly<SinglePropertyObject<TPropName, M1 | null>>, // do not use DeepReadonly
      WM & SinglePropertyObject<TPropName, WM1 | null>,
      V & SinglePropertyObject<TPropName, V1>,
      A & SinglePropertyObject<TPropName, A1>
      >;

  preProcessSnapshot(fn: (snapshot: S) => S): IModelType<S, M, WM, V, A>;

  views<ExtraV extends object>(f: (self: IProtectedStateTreeNode<S, M, WM, V, A>) => ExtraV):
    IModelType<
      S,
      M,
      WM,
      V & ExtraV,
      A
      >;

  // tslint:disable-next-line:ban-types
  actions<ExtraA extends { [name: string]: Function }>(f: (self: IUnprotectedStateTreeNode<S, M, WM, V, A>) => ExtraA):
    IModelType<
      S,
      M,
      WM,
      V,
      A & ExtraA
      >;
};
