import { IType } from '../';

export function immutable<S, M, WM, V, A>(t: IType<S, M, WM, V, A>): IType<
  S,
  M,
  M, // the write model becomes the readonly model
  V,
  A
  > {
  return t as any; // until invariant is added no change other than changing the write model by the model
}
