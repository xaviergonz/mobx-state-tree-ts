import { IObservableArray } from 'mobx';
import * as mbst from 'mobx-state-tree';
import { IComplexType, IStateTreeNode, IType } from '../';

export function array<S, M, WM>(baseType: IType<S, M>): IComplexType<
  S[],
  IObservableArray<IStateTreeNode<S, M>>
  > {
  return mbst.types.array(baseType as any) as any;
}
