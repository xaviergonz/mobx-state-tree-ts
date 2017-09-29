import * as mbst from 'mobx-state-tree';
import { IComplexType, IProtectedStateTreeNode, IType, IUnprotectedStateTreeNode } from '../';
import { IReadonlyExtendedObservableMap } from '../utils';

export function map<S, M, WM>(baseType: IType<S, M, WM>): IComplexType<
  {
    [k: string]: S
  },
  IReadonlyExtendedObservableMap<IProtectedStateTreeNode<S, M, WM>>,
  mbst.IExtendedObservableMap<IUnprotectedStateTreeNode<S, M, WM>>
  > {
  return mbst.types.map(baseType as any) as any;
}
