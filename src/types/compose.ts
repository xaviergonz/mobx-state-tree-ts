import * as mbst from 'mobx-state-tree';
import { IModelType } from '../';

// compose can only be done over models

// without name
export function compose<S1, M1, WM1, V1, A1, S2, M2, WM2, V2, A2, S3, M3, WM3, V3, A3>(
  t1: IModelType<S1, M1, WM1, V1, A1>,
  t2: IModelType<S2, M2, WM2, V2, A2>,
  t3?: IModelType<S3, M3, WM3, V3, A3>,
): IModelType<S1 & S2 & S3, M1 & M2 & M3, WM1 & WM2 & WM3, V1 & V2 & V3, A1 & A2 & A3>;

// with name
export function compose<S1, M1, WM1, V1, A1, S2, M2, WM2, V2, A2, S3, M3, WM3, V3, A3>(
  name: string,
  t1: IModelType<S1, M1, WM1, V1, A1>,
  t2: IModelType<S2, M2, WM2, V2, A2>,
  t3?: IModelType<S3, M3, WM3, V3, A3>,
): IModelType<S1 & S2 & S3, M1 & M2 & M3, WM1 & WM2 & WM3, V1 & V2 & V3, A1 & A2 & A3>;

// base
export function compose<S, M, WM, V, A>(...args: any[]): IModelType<S, M, WM, V, A> {
  const newArgs = args.filter((a) => a !== undefined); // skip undefined args
  return (mbst.types.compose as any)(...newArgs);
}
