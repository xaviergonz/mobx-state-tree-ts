import * as mbst from 'mobx-state-tree';
import { IComplexType, IModelType, IType } from '../';

// without name
export function late<S, M>(type: () => IModelType<S, M>): IModelType<S, M>;
export function late<S, M>(type: () => IComplexType<S, M>): IComplexType<S, M>;
export function late<S, M>(type: () => IType<S, M>): IType<S, M>;

// with name
export function late<S, M>(name: string, type: () => IModelType<S, M>): IModelType<S, M>;
export function late<S, M>(name: string, type: () => IComplexType<S, M>): IComplexType<S, M>;
export function late<S, M>(name: string, type: () => IType<S, M>): IType<S, M>;

// base
export function late<S, M>(...args: any[]): IType<S, M> {
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
