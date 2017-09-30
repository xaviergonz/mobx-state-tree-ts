import * as mbst from 'mobx-state-tree';
import { IModelType } from '../';

// compose can only be done over models

// without name
export function compose<S1, M1, S2, M2, S3, M3>(
  t1: IModelType<S1, M1>,
  t2: IModelType<S2, M2>,
  t3?: IModelType<S3, M3>,
): IModelType<S1 & S2 & S3, M1 & M2 & M3>;

// with name
export function compose<S1, M1, S2, M2, S3, M3>(
  name: string,
  t1: IModelType<S1, M1>,
  t2: IModelType<S2, M2>,
  t3?: IModelType<S3, M3>,
): IModelType<S1 & S2 & S3, M1 & M2 & M3>;

// base
export function compose<S, M>(...args: any[]): IModelType<S, M> {
  const newArgs = args.filter((a) => a !== undefined); // skip undefined args
  return (mbst.types.compose as any)(...newArgs);
}
