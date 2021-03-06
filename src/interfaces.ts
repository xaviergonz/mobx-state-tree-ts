import * as mbst from 'mobx-state-tree';
import { Omit, SinglePropertyObject } from './utils';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface
// tslint:disable:unified-signatures

// S = Snapshot,
// M = Model

export type ISnapshottable<S> = mbst.ISnapshottable<S>;
export type IStateTreeNode = mbst.IStateTreeNode;
export type IType<S, M> = mbst.IType<S, M>;
export type IComplexType<S, M> = mbst.IComplexType<S, M>;

// no props, use prop, optProp or maybeProp instead
export type IModelType<S, M> = Omit<mbst.IModelType<S, M>, 'props' | 'actions' | 'views' | 'preProcessSnapshot'> & {
  // needs implementation
  prop<TPropName extends string, S1, M1>(pname: TPropName, type: IComplexType<S1, M1>):
    IModelType<
      S & SinglePropertyObject<TPropName, S1>,
      M & SinglePropertyObject<TPropName, M1 & IStateTreeNode>
      >;
  prop<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>):
    IModelType<
      S & SinglePropertyObject<TPropName, S1>,
      M & SinglePropertyObject<TPropName, M1 & IStateTreeNode>
      >;

  // needs implementation
  optProp<TPropName extends string, S1, M1>(pname: TPropName, type: IComplexType<S1, M1>, defValue: S1 | (() => S1)):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1>>,
      M & SinglePropertyObject<TPropName, M1 & IStateTreeNode>
      >;
  optProp<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>, defValue: S1 | (() => S1)):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1>>,
      M & SinglePropertyObject<TPropName, M1 & IStateTreeNode>
      >;

  // needs implementation
  maybeProp<TPropName extends string, S1, M1>(pname: TPropName, type: IComplexType<S1, M1>):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1 | null>>,
      M & SinglePropertyObject<TPropName, (M1 & IStateTreeNode) | null>
      >;
  maybeProp<TPropName extends string, S1, M1>(pname: TPropName, type: IType<S1, M1>):
    IModelType<
      S & Partial<SinglePropertyObject<TPropName, S1 | null>>,
      M & SinglePropertyObject<TPropName, (M1 & IStateTreeNode) | null>
      >;


  preProcessSnapshot(fn: (snapshot: S) => S): IModelType<S, M>;

  views<ExtraV extends object>(f: (self: M & IStateTreeNode) => ExtraV):
    IModelType<
      S,
      M & ExtraV
      >;

  actions<
      // tslint:disable-next-line:ban-types
      ExtraA extends { [name: string]: Function }
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
      // tslint:disable-next-line:ban-types
      ExtraA extends { [name: string]: Function },
      ExtraV extends object
    >(f: (self: M & IStateTreeNode) => { actions: ExtraA, views: ExtraV }):
    IModelType<
      S,
      M & ExtraA & ExtraV
      >;

  extend<
    // tslint:disable-next-line:ban-types
    ExtraA extends { [name: string]: Function }
    >(f: (self: M & IStateTreeNode) => { actions: ExtraA }):
    IModelType<
      S,
      M & ExtraA
      >;

  extend<
    // tslint:disable-next-line:ban-types
    ExtraV extends object
    >(f: (self: M & IStateTreeNode) => { views: ExtraV }):
    IModelType<
      S,
      M & ExtraV
      >;
};
