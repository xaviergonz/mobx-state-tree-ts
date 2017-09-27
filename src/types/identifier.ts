import * as mbst from 'mobx-state-tree';
import { ISimpleType } from '../interfaces';
import { types } from './';

// an identifier can only be of a string or a number. if there's no type then string is assumed
export function identifier(subType?: typeof types.string): typeof types.string;
export function identifier(subType: typeof types.number): typeof types.number;

// base
export function identifier<T extends string | number>(subType?: ISimpleType<T>): ISimpleType<T> {
  if (subType === undefined) {
    return mbst.types.identifier() as any;
  }
  else {
    return mbst.types.identifier(subType as any) as any;
  }
}
