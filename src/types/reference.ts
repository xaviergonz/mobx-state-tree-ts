import * as mbst from 'mobx-state-tree';
import { IType } from '../';

// the output is IType since it cannot use extended stuff such as compose or snapshot (TODO: I think)
export const reference = (mbst.types.reference as any) as <S, M, WM, V, A>(type: IType<S, M, WM, V, A>) => IType<
  number | string, // ids can only be strings or numbers
  M,
  WM,
  V,
  A
  >;
