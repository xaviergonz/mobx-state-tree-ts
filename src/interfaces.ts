import * as mbst from 'mobx-state-tree';
import { Omit, SinglePropertyObject } from './utils';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// S = Snapshot,
// M = Model

export type IStateTreeNode = mbst.IStateTreeNode;
export type ISnapshottable<S> = mbst.ISnapshottable<S>;
export type IType<S, M> = mbst.IType<S, M>;
export type IComplexType<S, M> = mbst.IComplexType<S, M>;

// tslint:disable-next-line:ban-types
export type ActionMember = Function;
export type ActionObject = { [name: string]: ActionMember };

export type ViewMember = Exclude<any, (...args: any[]) => void>;
export type ViewObject = { [name: string]: ViewMember };

// no props, use prop, optProp or maybeProp instead
export type IModelType<S, M> = Omit<mbst.IModelType<S, M>, 'props' | 'actions' | 'views' | 'preProcessSnapshot'> & {

  // needs implementation
  prop<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>):
    IModelType<
      S & SinglePropertyObject<TPropName, S1>,
      M & SinglePropertyObject<TPropName, M1 & IStateTreeNode>
      >;

  // needs implementation
  optProp<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>, defValue: S1 | (() => S1)):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1>>,
      M & SinglePropertyObject<TPropName, M1 & IStateTreeNode>
      >;

  // needs implementation
  maybeProp<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1 | null>>,
      M & SinglePropertyObject<TPropName, (M1 & IStateTreeNode) | null>
      >;


  preProcessSnapshot(fn: (snapshot: S) => S): IModelType<S, M>;

  views<ExtraV extends ViewObject>(f: (self: M & IStateTreeNode) => ExtraV):
    IModelType<
      S,
      M & ExtraV
      >;

  actions<
      ExtraA extends ActionObject
    >(f: (self: M & IStateTreeNode) => ExtraA):
    IModelType<
      S,
      M & ExtraA
      >;

  volatile<ExtraP extends object>(fn: (self: M & IStateTreeNode) => ExtraP):
    IModelType<
      S,
      M & ExtraP
      >;

  extend<
      ExtraA extends ActionObject,
      ExtraV extends ViewObject
    >(f: (self: M & IStateTreeNode) => { actions: ExtraA, views: ExtraV }):
    IModelType<
      S,
      M & ExtraA & ExtraV
      >;

  extend<
    // tslint:disable-next-line:ban-types
    ExtraA extends ActionObject
    >(f: (self: M & IStateTreeNode) => { actions: ExtraA }):
    IModelType<
      S,
      M & ExtraA
      >;

  extend<
    ExtraV extends ViewObject
    >(f: (self: M & IStateTreeNode) => { views: ExtraV }):
    IModelType<
      S,
      M & ExtraV
      >;
};
