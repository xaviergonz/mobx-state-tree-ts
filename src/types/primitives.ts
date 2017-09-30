import * as mbst from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { ISimpleType, IType, ReadonlyDate } from '../';

export const primitives = {
  boolean: (mbst.types.boolean as any) as ISimpleType<boolean>,
  null: (mbst.types.null as any) as ISimpleType<null>,
  number: (mbst.types.number as any) as ISimpleType<number>,
  string: (mbst.types.string as any) as ISimpleType<string>,
  Date: (mbst.types.Date as any) as IType<number, (Date | number)>,

  // undefined is not implemented, use optProp instead
};
