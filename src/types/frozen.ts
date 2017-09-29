import * as mbst from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { IType } from '../';
import { DeepReadonly } from '../utils';

export const frozen = (mbst.types.frozen as any) as IType<any, DeepReadonly<any>, any>;
