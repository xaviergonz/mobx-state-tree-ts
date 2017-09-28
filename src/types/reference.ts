import * as mbst from 'mobx-state-tree';
import { IType, OComplexType } from '../';

// the output is IComplexType since it cannot use compose but it can use snapshot
export const reference = (mbst.types.reference as any) as <S, M, WM>(type: IType<S, M, WM>) => OComplexType<
  number | string, // ids can only be strings or numbers
  M,
  WM
  >;
