import * as mbst from 'mobx-state-tree';
import { IComplexType, IModelType } from '../';
import { IType } from '../interfaces';

type MessageType = string | ((v: any) => string);
type PredicateType<S> = (sn: S) => boolean;

// without name
export function refinement<S, M, WM, V, A>(t1: IModelType<S, M, WM, V, A>, predicate: PredicateType<S>, message?: MessageType): IModelType<S, M, WM, V, A>;
export function refinement<S, M, WM, V, A>(t1: IComplexType<S, M, WM, V, A>, predicate: PredicateType<S>, message?: MessageType): IComplexType<S, M, WM, V, A>;
export function refinement<S, M, WM, V, A>(t1: IType<S, M, WM, V, A>, predicate: PredicateType<S>, message?: MessageType): IType<S, M, WM, V, A>;

// with name
export function refinement<S, M, WM, V, A>(name: string, t1: IModelType<S, M, WM, V, A>, predicate: PredicateType<S>, message?: MessageType): IModelType<S, M, WM, V, A>;
export function refinement<S, M, WM, V, A>(name: string, t1: IComplexType<S, M, WM, V, A>, predicate: PredicateType<S>, message?: MessageType): IComplexType<S, M, WM, V, A>;
export function refinement<S, M, WM, V, A>(name: string, t1: IType<S, M, WM, V, A>, predicate: PredicateType<S>, message?: MessageType): IType<S, M, WM, V, A>;

// base
export function refinement<S, M, WM, V, A>(...args: any[]): IType<S, M, WM, V, A> {
  const newArgs = args.filter((a) => a !== undefined); // skip undefined args
  return (mbst.types.refinement as any)(...newArgs);
}
