import * as mbst from 'mobx-state-tree';
import { IOutComplexType, IOutModelType, IOutType } from '../';

// without name
export function late<S, M, WM>(type: () => IOutModelType<S, M, WM>): IOutModelType<S, M, WM>;
export function late<S, M, WM>(type: () => IOutComplexType<S, M, WM>): IOutComplexType<S, M, WM>;
export function late<S, M, WM>(type: () => IOutType<S, M, WM>): IOutType<S, M, WM>;

// with name
export function late<S, M, WM>(name: string, type: () => IOutModelType<S, M, WM>): IOutModelType<S, M, WM>;
export function late<S, M, WM>(name: string, type: () => IOutComplexType<S, M, WM>): IOutComplexType<S, M, WM>;
export function late<S, M, WM>(name: string, type: () => IOutType<S, M, WM>): IOutType<S, M, WM>;

// base
export function late<S, M, WM>(...args: any[]): IOutType<S, M, WM> {
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
