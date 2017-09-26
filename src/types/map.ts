import * as mbst from 'mobx-state-tree';
import { IComplexType, IType } from '../';

export function map<S, M, WM, V, A>(baseType: IType<S, M, WM, V, A>): IComplexType<
  { [k: string]: S },
  Readonly<{ [k: string]: M }>, // TODO: I think this should be a readonly interface of IExtendedObservable
  mbst.IExtendedObservableMap<WM>,
  {},
  {}
  > {
  return mbst.types.map(baseType as any) as any;
}
