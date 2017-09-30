import * as mbst from 'mobx-state-tree';
import { IComplexType, IStateTreeNode, IType } from '../';

export function map<S, M>(baseType: IType<S, M>): IComplexType<
  {
    [k: string]: S
  },
  mbst.IExtendedObservableMap<IStateTreeNode<S, M>>
  > {
  return mbst.types.map(baseType as any) as any;
}
