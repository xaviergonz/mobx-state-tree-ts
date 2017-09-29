import * as mbst from 'mobx-state-tree';
import { IModelType } from '../';

// compose can only be done over models

// without name
export function compose<S1, M1, WM1, S2, M2, WM2, S3, M3, WM3>(
  t1: IModelType<S1, M1, WM1>,
  t2: IModelType<S2, M2, WM2>,
  t3?: IModelType<S3, M3, WM3>,
): IModelType<S1 & S2 & S3, M1 & M2 & M3, WM1 & WM2 & WM3>;

// with name
export function compose<S1, M1, WM1, S2, M2, WM2, S3, M3, WM3>(
  name: string,
  t1: IModelType<S1, M1, WM1>,
  t2: IModelType<S2, M2, WM2>,
  t3?: IModelType<S3, M3, WM3>,
): IModelType<S1 & S2 & S3, M1 & M2 & M3, WM1 & WM2 & WM3>;

// base
export function compose<S, M, WM>(...args: any[]): IModelType<S, M, WM> {
  const newArgs = args.filter((a) => a !== undefined); // skip undefined args
  return (mbst.types.compose as any)(...newArgs);
}
