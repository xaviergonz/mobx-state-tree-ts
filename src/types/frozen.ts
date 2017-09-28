import * as mbst from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { IType, OType } from '../';
import { DeepReadonly } from '../utils';

export const frozen = (mbst.types.frozen as any) as OType<any, DeepReadonly<any>, any>;
