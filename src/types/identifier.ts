import * as mbst from 'mobx-state-tree';
import { ISimpleType } from '../interfaces';
import { types } from './';

export function identifier(subType?: typeof types.string): typeof types.string;
export function identifier(subType: typeof types.number): typeof types.number;
export function identifier<T extends string | number>(subType?: ISimpleType<T>): ISimpleType<T> {
  return mbst.types.identifier(subType as any) as any;
}
