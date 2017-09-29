import * as mbst from 'mobx-state-tree';
import { IComplexType, IModelType, IType } from '../';

export type RefinementMessageType = string | ((v: any) => string);
export type RefinementPredicateType<S> = (sn: S) => boolean;

// without name
export function refinement<S, M, WM>(t1: IModelType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IModelType<S, M, WM>;
export function refinement<S, M, WM>(t1: IComplexType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IComplexType<S, M, WM>;
export function refinement<S, M, WM>(t1: IType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IType<S, M, WM>;

// with name
export function refinement<S, M, WM>(name: string, t1: IModelType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IModelType<S, M, M>;
export function refinement<S, M, WM>(name: string, t1: IComplexType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IComplexType<S, M, M>;
export function refinement<S, M, WM>(name: string, t1: IType<S, M, WM>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IType<S, M, M>;

// base
export function refinement<S, M, WM>(...args: any[]): IType<S, M, M> {
  const newArgs = args.filter((a) => a !== undefined); // skip undefined args
  return (mbst.types.refinement as any)(...newArgs);
}
