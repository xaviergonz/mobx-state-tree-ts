import * as mbst from 'mobx-state-tree';
import { IComplexType, IModelType, IType } from '../';

// without name
export function late<S, M, WM>(type: () => IModelType<S, M, WM>): IModelType<S, M, WM>;
export function late<S, M, WM>(type: () => IComplexType<S, M, WM>): IComplexType<S, M, WM>;
export function late<S, M, WM>(type: () => IType<S, M, WM>): IType<S, M, WM>;

// with name
export function late<S, M, WM>(name: string, type: () => IModelType<S, M, WM>): IModelType<S, M, WM>;
export function late<S, M, WM>(name: string, type: () => IComplexType<S, M, WM>): IComplexType<S, M, WM>;
export function late<S, M, WM>(name: string, type: () => IType<S, M, WM>): IType<S, M, WM>;

// base
export function late<S, M, WM>(...args: any[]): IType<S, M, WM> {
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
