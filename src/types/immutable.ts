import { IComplexType, IModelType, IType } from '../';

// in all cases WM becomes M

export function immutable<S, M, WM>(t: IModelType<S, M, WM>): IModelType<S , M , M >;
export function immutable<S, M, WM>(t: IComplexType<S, M, WM>): IComplexType<S , M , M >;
export function immutable<S, M, WM>(t: IType<S, M, WM>): IType<S , M , M > {
  return t as any; // until invariant is added no change other than changing the write model by the model
}
