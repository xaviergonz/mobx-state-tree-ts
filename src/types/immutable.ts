import { IComplexType, IModelType, IType } from '../';

// in all cases WM becomes M

export function immutable<S, M, WM, V, A>(t: IModelType<S, M, WM, V, A>): IModelType<S, M, M, V, A>;
export function immutable<S, M, WM, V, A>(t: IComplexType<S, M, WM, V, A>): IComplexType<S, M, M, V, A>;
export function immutable<S, M, WM, V, A>(t: IType<S, M, WM, V, A>): IType<S, M, M, V, A> {
  return t as any; // until invariant is added no change other than changing the write model by the model
}
