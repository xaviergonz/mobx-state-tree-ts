import * as mbst from 'mobx-state-tree';
import { IComplexType, IModelType, IType } from '../interfaces';

// name and message are moved to the end
export function refinement<S, M, WM, V, A>(t1: IModelType<S, M, WM, V, A>, predicate: (sn: S) => boolean, name?: string, message?: string | ((v: any) => string)):
IModelType<S, M, WM, V, A>;
export function refinement<S, M, WM, V, A>(t1: IComplexType<S, M, WM, V, A>, predicate: (sn: S) => boolean, name?: string, message?: string | ((v: any) => string)):
IComplexType<S, M, WM, V, A>;
export function refinement<S, M, WM, V, A>(t1: IType<S, M, WM, V, A>, predicate: (sn: S) => boolean, name?: string, message?: string | ((v: any) => string)):
IType<S, M, WM, V, A> {
  if (name) {
    return mbst.types.refinement(name, t1 as any, predicate, message) as any;
  }
  else {
    return mbst.types.refinement(t1 as any, predicate, message) as any;
  }
}
