import * as mbst from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { IType, IOutType } from '../';
import { DeepReadonly } from '../utils';

export const frozen = (mbst.types.frozen as any) as IOutType<any, DeepReadonly<any>, any>;
