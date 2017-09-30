import * as mbst from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { IType } from '../';

export const frozen = (mbst.types.frozen as any) as IType<any, any>;
