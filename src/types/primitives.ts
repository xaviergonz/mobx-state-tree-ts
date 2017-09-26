import * as mbst from 'mobx-state-tree';
import { ISimpleType, IType } from '../interfaces';

export const primitives = {
  boolean: (mbst.types.boolean as any) as ISimpleType<boolean>,
  null: (mbst.types.null as any) as ISimpleType<null>,
  number: (mbst.types.number as any) as ISimpleType<number>,
  string: (mbst.types.string as any) as ISimpleType<string>,

  // TODO: to be more exact we should use an interface that wraps date and omits set methods
  // not sure if write model should not be the readonly one as well
  Date: (mbst.types.Date as any) as IType<number, Date, Date, {}, {}>,

  // undefined is not implemented, use optProp instead

};
