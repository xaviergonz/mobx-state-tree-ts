import * as mbst from 'mobx-state-tree';
import { IComplexType, IType } from 'mobx-state-tree';
import { IModelType } from '../';

export type RefinementMessageType = string | ((v: any) => string);
export type RefinementPredicateType<S> = (sn: S) => boolean;

// without name
export function refinement<S, M>(t1: IModelType<S, M>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IModelType<S, M>;
export function refinement<S, M>(t1: IComplexType<S, M>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IComplexType<S, M>;
export function refinement<S, M>(t1: IType<S, M>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IType<S, M>;

// with name
export function refinement<S, M>(name: string, t1: IModelType<S, M>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IModelType<S, M>;
export function refinement<S, M>(name: string, t1: IComplexType<S, M>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IComplexType<S, M>;
export function refinement<S, M>(name: string, t1: IType<S, M>, predicate: RefinementPredicateType<S>, message?: RefinementMessageType): IType<S, M>;

// base
export function refinement<S, M>(...args: any[]): IType<S, M> {
  const newArgs = args.filter((a) => a !== undefined); // skip undefined args
  return (mbst.types.refinement as any)(...newArgs);
}
