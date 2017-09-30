import * as mbst from 'mobx-state-tree';
import { DeepReadonly, SinglePropertyObject } from './utils';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// S = Snapshot,
// M = Model

export type IStateTreeNode<S, M> = M & mbst.IStateTreeNode;

export type IType<S, M> = {
  // types
  SnapshotType: S;

  // TODO: node instances of simple types cannot be snap-shotted
  Type: IStateTreeNode<S, M>;

  readonly name: string;
  create(snapshot?: S, environment?: any): IStateTreeNode<S, M>;
};

export type ISimpleType<T> = IType<
  T, // S
  T // M
  >;

export type IComplexType<S, M> = IType<S , M> & {
  // TODO: node instances of complex types can be snap-shotted

  create(snapshot?: S , environment?: any): IStateTreeNode<S, M>;
};

export type IModelType<S, M> /* extends mbst.IModelType<S, M> */ = IComplexType<S , M> & {
  named(newName: string): IModelType<S, M>;

  // no props, use prop, optProp or maybeProp instead

  // needs implementation
  prop<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>):
    IModelType<
      S & SinglePropertyObject<TPropName, S1>,
      M & SinglePropertyObject<TPropName, IStateTreeNode<S1, M1>>
      >;

  // needs implementation
  optProp<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>, defValue: S1 | (() => S1)):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1>>,
      M & SinglePropertyObject<TPropName, IStateTreeNode<S1, M1>>
      >;

  // needs implementation
  maybeProp<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1 | null>>,
      M & SinglePropertyObject<TPropName, IStateTreeNode<S1, M1> | null>
      >;

  preProcessSnapshot(fn: (snapshot: S) => S): IModelType<S, M>;

  views<ExtraV extends object>(f: (self: IStateTreeNode<S, M>) => ExtraV):
    IModelType<
      S,
      M & ExtraV
      >;

  // tslint:disable-next-line:ban-types
  actions<ExtraA extends { [name: string]: Function }>(f: (self: IStateTreeNode<S, M>) => ExtraA):
    IModelType<
      S,
      M & ExtraA
      >;
};
