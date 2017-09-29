import * as mbst from 'mobx-state-tree';
import { IComplexType, IType } from '../';

// up to 10 types, after that the type is lost as any
// it is ok to upgrade/downgrade it to IComplexType since unions loose their ability to be composed (though they still can be snapshotted)

// without dispatch
export function union<
  S1, M1, WM1,
  S2, M2, WM2
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
): IComplexType<
  S1 | S2,
  M1 | M2,
  WM1 | WM2
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
): IComplexType<
  S1 | S2 | S3,
  M1 | M2 | M3,
  WM1 | WM2 | WM3
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
): IComplexType<
  S1 | S2 | S3 | S4,
  M1 | M2 | M3 | M4,
  WM1 | WM2 | WM3 | WM4
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5,
  M1 | M2 | M3 | M4 | M5,
  WM1 | WM2 | WM3 | WM4 | WM5
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6,
  M1 | M2 | M3 | M4 | M5 | M6,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7,
  M1 | M2 | M3 | M4 | M5 | M6 | M7,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7,
  S8, M8, WM8
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
  t8: IType<S8, M8, WM8>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7,
  S8, M8, WM8,
  S9, M9, WM9
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
  t8: IType<S8, M8, WM8>,
  t9: IType<S9, M9, WM9>
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7,
  S8, M8, WM8,
  S9, M9, WM9,
  S10, M10, WM10
  >(
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
  t8: IType<S8, M8, WM8>,
  t9: IType<S9, M9, WM9>,
  t10: IType<S10, M10, WM10>
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9 | WM10
  >;


// with dispatch
export function union<
  S1, M1, WM1,
  S2, M2, WM2
  >(
  dispatch: (sn: S1 | S2) => IType<
    S1 | S2,
    M1 | M2,
    WM1 | WM2
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
): IComplexType<
  S1 | S2,
  M1 | M2,
  WM1 | WM2
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3
  >(
  dispatch: (sn: S1 | S2 | S3) => IType<
    S1 | S2 | S3,
    M1 | M2 | M3,
    WM1 | WM2 | WM3
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
): IComplexType<
  S1 | S2 | S3,
  M1 | M2 | M3,
  WM1 | WM2 | WM3
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4
  >(
  dispatch: (sn: S1 | S2 | S3 | S4) => IType<
    S1 | S2 | S3 | S4,
    M1 | M2 | M3 | M4,
    WM1 | WM2 | WM3 | WM4
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
): IComplexType<
  S1 | S2 | S3 | S4,
  M1 | M2 | M3 | M4,
  WM1 | WM2 | WM3 | WM4
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5) => IType<
    S1 | S2 | S3 | S4 | S5,
    M1 | M2 | M3 | M4 | M5,
    WM1 | WM2 | WM3 | WM4 | WM5
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5,
  M1 | M2 | M3 | M4 | M5,
  WM1 | WM2 | WM3 | WM4 | WM5
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6) => IType<
    S1 | S2 | S3 | S4 | S5 | S6,
    M1 | M2 | M3 | M4 | M5 | M6,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6,
  M1 | M2 | M3 | M4 | M5 | M6,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7,
    M1 | M2 | M3 | M4 | M5 | M6 | M7,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7,
  M1 | M2 | M3 | M4 | M5 | M6 | M7,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7,
  S8, M8, WM8
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
  t8: IType<S8, M8, WM8>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7,
  S8, M8, WM8,
  S9, M9, WM9
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
  t8: IType<S8, M8, WM8>,
  t9: IType<S9, M9, WM9>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9
  >;

export function union<
  S1, M1, WM1,
  S2, M2, WM2,
  S3, M3, WM3,
  S4, M4, WM4,
  S5, M5, WM5,
  S6, M6, WM6,
  S7, M7, WM7,
  S8, M8, WM8,
  S9, M9, WM9,
  S10, M10, WM10
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9 | WM10
    >,
  t1: IType<S1, M1, WM1>,
  t2: IType<S2, M2, WM2>,
  t3: IType<S3, M3, WM3>,
  t4: IType<S4, M4, WM4>,
  t5: IType<S5, M5, WM5>,
  t6: IType<S6, M6, WM6>,
  t7: IType<S7, M7, WM7>,
  t8: IType<S8, M8, WM8>,
  t9: IType<S9, M9, WM9>,
  t10: IType<S10, M10, WM10>
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9 | WM10
  >;

// many of the same kind
export function union<S, M, WM>(...types: IType<S, M, WM>[]): IComplexType<S, M, WM>;
export function union<S, M, WM>(dispatch: (sn: S) => IType<S, M, WM>, ...types: IType<S, M, WM>[]): IComplexType<S, M, WM>;

// many of any kind
export function union<S, M, WM>(...types: IType<any, any, any>[]): IComplexType<S, M, WM>;
export function union<S, M, WM>(dispatch: (sn: S) => IType<any, any, any>, ...types: IType<any, any, any>[]): IComplexType<S, M, WM>;

// base
export function union<S, M, WM>(...args: any[]): IComplexType<S, M, WM> {
  return mbst.types.union(...args) as any;
}
