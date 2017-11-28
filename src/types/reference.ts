import * as mbst from 'mobx-state-tree';
import { IComplexType, IStateTreeNode, IType } from 'mobx-state-tree';
import { ReferenceOptions } from 'mobx-state-tree/dist/types/utility-types/reference';

// the output is IComplexType since it cannot use compose but it can use snapshot
export const reference = (mbst.types.reference as any) as <S, M>(factory: IType<S, M>, options?: ReferenceOptions<M>) => IComplexType<
  number | string, // ids can only be strings or numbers
  M
  >;
