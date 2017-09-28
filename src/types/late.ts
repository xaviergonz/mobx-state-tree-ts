import * as mbst from 'mobx-state-tree';
import { OComplexType, OModelType, OType } from '../';

// without name
export function late<S, M, WM>(type: () => OModelType<S, M, WM>): OModelType<S, M, WM>;
export function late<S, M, WM>(type: () => OComplexType<S, M, WM>): OComplexType<S, M, WM>;
export function late<S, M, WM>(type: () => OType<S, M, WM>): OType<S, M, WM>;

// with name
export function late<S, M, WM>(name: string, type: () => OModelType<S, M, WM>): OModelType<S, M, WM>;
export function late<S, M, WM>(name: string, type: () => OComplexType<S, M, WM>): OComplexType<S, M, WM>;
export function late<S, M, WM>(name: string, type: () => OType<S, M, WM>): OType<S, M, WM>;

// base
export function late<S, M, WM>(...args: any[]): OType<S, M, WM> {
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
