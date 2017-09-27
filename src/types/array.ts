import { IObservableArray } from 'mobx';
import * as mbst from 'mobx-state-tree';
import { IComplexType, IProtectedStateTreeNode, IType, IUnprotectedStateTreeNode } from '../';
import { IReadOnlyObservableArray } from '../utils';

export function array<S, M, WM, V, A>(baseType: IType<S, M, WM, V, A>): IComplexType<
  S[],
  IReadOnlyObservableArray<IProtectedStateTreeNode<S, M, WM, V, A>>,
  IObservableArray<IUnprotectedStateTreeNode<S, M, WM, V, A>>,
  {}, // V
  {} // A
  > {
  return mbst.types.array(baseType as any) as any;
}
