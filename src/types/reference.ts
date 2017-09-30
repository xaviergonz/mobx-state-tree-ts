import * as mbst from 'mobx-state-tree';
import { IComplexType, IType } from '../';

// the output is IComplexType since it cannot use compose but it can use snapshot
export const reference = (mbst.types.reference as any) as <S, M>(type: IType<S, M>) => IComplexType<
  number | string, // ids can only be strings or numbers
  M
  >;
