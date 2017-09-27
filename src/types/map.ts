import * as mbst from 'mobx-state-tree';
import { IComplexType, IProtectedStateTreeNode, IType, IUnprotectedStateTreeNode } from '../';
import { IReadonlyExtendedObservableMap } from '../utils';

export function map<S, M, WM, V, A>(baseType: IType<S, M, WM, V, A>): IComplexType<
  {
    [k: string]: S
  },
  IReadonlyExtendedObservableMap<IProtectedStateTreeNode<S, M, WM, V, A>>,
  mbst.IExtendedObservableMap<IUnprotectedStateTreeNode<S, M, WM, V, A>>,
  {},
  {}
  > {
  return mbst.types.map(baseType as any) as any;
}
