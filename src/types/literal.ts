import * as mbst from 'mobx-state-tree';
import { ISimpleType } from '../';

export function literal<T extends string | number | boolean | null>(value: T): ISimpleType<T> {
  return mbst.types.literal(value) as any;
}
