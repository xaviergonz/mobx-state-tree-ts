import { IObservableArray } from 'mobx';
import * as mbst from 'mobx-state-tree';
import { IProtectedStateTreeNode, IType, IUnprotectedStateTreeNode, OComplexType } from '../';
import { IReadOnlyObservableArray } from '../utils';

export function array<S, M, WM>(baseType: IType<S, M, WM>): OComplexType<
  S[],
  IReadOnlyObservableArray<IProtectedStateTreeNode<S, M, WM>>,
  IObservableArray<IUnprotectedStateTreeNode<S, M, WM>>
  > {
  return mbst.types.array(baseType as any) as any;
}
