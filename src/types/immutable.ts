import { IComplexType, IModelType, IType, MTag, STag, WMTag } from '../';

// in all cases WM becomes M

export function immutable<S, M, WM>(t: IModelType<S, M, WM>): IModelType<S & STag, M & MTag, M & WMTag>;
export function immutable<S, M, WM>(t: IComplexType<S, M, WM>): IComplexType<S & STag, M & MTag, M & WMTag>;
export function immutable<S, M, WM>(t: IType<S, M, WM>): IType<S & STag, M & MTag, M & WMTag> {
  return t as any; // until invariant is added no change other than changing the write model by the model
}
