import * as mbst from 'mobx-state-tree';
import { IComplexType, IModelType, IOutComplexType, IOutModelType, IOutType } from '../';
import { IType } from '../interfaces';

export type RefinementMessageType = string | ((v: any) => string);
export type RefinementPredicateType<S> = (sn: S) => boolean;

// without name
export function refinement<S, M, WM>(t1: IModelType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IOutModelType<S, M, WM>;
export function refinement<S, M, WM>(t1: IComplexType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IOutComplexType<S, M, WM>;
export function refinement<S, M, WM>(t1: IType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IOutType<S, M, WM>;

// with name
export function refinement<S, M, WM>(name: string, t1: IModelType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IOutModelType<S, M, M>;
export function refinement<S, M, WM>(name: string, t1: IComplexType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IOutComplexType<S, M, M>;
export function refinement<S, M, WM>(name: string, t1: IType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IOutType<S, M, M>;

// base
export function refinement<S, M, WM>(...args: any[]): IOutType<S, M, M> {
  const newArgs = args.filter((a) => a !== undefined); // skip undefined args
  return (mbst.types.refinement as any)(...newArgs);
}
