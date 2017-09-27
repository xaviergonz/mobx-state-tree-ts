import * as mbst from 'mobx-state-tree';
import { IComplexType, IModelType, IType } from '../';

// without name
export function late<S, M, WM, V, A>(type: () => IModelType<S, M, WM, V, A>): IModelType<S, M, WM, V, A>;
export function late<S, M, WM, V, A>(type: () => IComplexType<S, M, WM, V, A>): IComplexType<S, M, WM, V, A>;
export function late<S, M, WM, V, A>(type: () => IType<S, M, WM, V, A>): IType<S, M, WM, V, A>;

// with name
export function late<S, M, WM, V, A>(name: string, type: () => IModelType<S, M, WM, V, A>): IModelType<S, M, WM, V, A>;
export function late<S, M, WM, V, A>(name: string, type: () => IComplexType<S, M, WM, V, A>): IComplexType<S, M, WM, V, A>;
export function late<S, M, WM, V, A>(name: string, type: () => IType<S, M, WM, V, A>): IType<S, M, WM, V, A>;

// base
export function late<S, M, WM, V, A>(...args: any[]): IType<S, M, WM, V, A> {
  if (typeof args[0] === 'string') {
    const name = args[0];
    const type = args[1];
    return mbst.types.late(name, type) as any;
  }
  else {
    const type = args[0];
    return mbst.types.late(type) as any;
  }
}
