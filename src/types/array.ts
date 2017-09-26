import { IObservableArray } from 'mobx';
import * as mbst from 'mobx-state-tree';
import { IComplexType, IType } from '../';

export function array<S, M, WM, V, A>(baseType: IType<S, M, WM, V, A>): IComplexType<
  S[],
  ReadonlyArray<M>, // TODO: I think this should be a readonly interface of IObservableArray
  IObservableArray<WM>,
  {}, // V
  {} // A
  > {
  return mbst.types.array(baseType as any) as any;
}
