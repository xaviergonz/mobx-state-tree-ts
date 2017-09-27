import * as mbst from 'mobx-state-tree';
import { IComplexType, IType } from '../';

// up to 10 types, after that the type is lost as any
// it is ok to upgrade/downgrade it to IComplexType since unions loose their ability to be composed (though they still can be snapshotted)

// without dispatch
export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
): IComplexType<
  S1 | S2,
  M1 | M2,
  WM1 | WM2,
  V1 | V2,
  A1 | A2
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
): IComplexType<
  S1 | S2 | S3,
  M1 | M2 | M3,
  WM1 | WM2 | WM3,
  V1 | V2 | V3,
  A1 | A2 | A3
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
): IComplexType<
  S1 | S2 | S3 | S4,
  M1 | M2 | M3 | M4,
  WM1 | WM2 | WM3 | WM4,
  V1 | V2 | V3 | V4,
  A1 | A2 | A3 | A4
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5,
  M1 | M2 | M3 | M4 | M5,
  WM1 | WM2 | WM3 | WM4 | WM5,
  V1 | V2 | V3 | V4 | V5,
  A1 | A2 | A3 | A4 | A5
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6,
  M1 | M2 | M3 | M4 | M5 | M6,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6,
  V1 | V2 | V3 | V4 | V5 | V6,
  A1 | A2 | A3 | A4 | A5 | A6
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7,
  M1 | M2 | M3 | M4 | M5 | M6 | M7,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7,
  V1 | V2 | V3 | V4 | V5 | V6 | V7,
  A1 | A2 | A3 | A4 | A5 | A6 | A7
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7,
  S8, M8, WM8, V8, A8
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
  t8: IType<S8, M8, WM8, V8, A8>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8,
  V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8,
  A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7,
  S8, M8, WM8, V8, A8,
  S9, M9, WM9, V9, A9
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
  t8: IType<S8, M8, WM8, V8, A8>,
  t9: IType<S9, M9, WM9, V9, A9>
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9,
  V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9,
  A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7,
  S8, M8, WM8, V8, A8,
  S9, M9, WM9, V9, A9,
  S10, M10, WM10, V10, A10
  >(
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
  t8: IType<S8, M8, WM8, V8, A8>,
  t9: IType<S9, M9, WM9, V9, A9>,
  t10: IType<S10, M10, WM10, V10, A10>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9 | WM10,
  V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10,
  A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9 | A10
  >;


// with dispatch
export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2
  >(
  dispatch: (sn: S1 | S2) => IType<
    S1 | S2,
    M1 | M2,
    WM1 | WM2,
    V1 | V2,
    A1 | A2
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
): IComplexType<
  S1 | S2,
  M1 | M2,
  WM1 | WM2,
  V1 | V2,
  A1 | A2
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3
  >(
  dispatch: (sn: S1 | S2 | S3) => IType<
    S1 | S2 | S3,
    M1 | M2 | M3,
    WM1 | WM2 | WM3,
    V1 | V2 | V3,
    A1 | A2 | A3
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
): IComplexType<
  S1 | S2 | S3,
  M1 | M2 | M3,
  WM1 | WM2 | WM3,
  V1 | V2 | V3,
  A1 | A2 | A3
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4
  >(
  dispatch: (sn: S1 | S2 | S3 | S4) => IType<
    S1 | S2 | S3 | S4,
    M1 | M2 | M3 | M4,
    WM1 | WM2 | WM3 | WM4,
    V1 | V2 | V3 | V4,
    A1 | A2 | A3 | A4
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
): IComplexType<
  S1 | S2 | S3 | S4,
  M1 | M2 | M3 | M4,
  WM1 | WM2 | WM3 | WM4,
  V1 | V2 | V3 | V4,
  A1 | A2 | A3 | A4
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5) => IType<
    S1 | S2 | S3 | S4 | S5,
    M1 | M2 | M3 | M4 | M5,
    WM1 | WM2 | WM3 | WM4 | WM5,
    V1 | V2 | V3 | V4 | V5,
    A1 | A2 | A3 | A4 | A5
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5,
  M1 | M2 | M3 | M4 | M5,
  WM1 | WM2 | WM3 | WM4 | WM5,
  V1 | V2 | V3 | V4 | V5,
  A1 | A2 | A3 | A4 | A5
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6) => IType<
    S1 | S2 | S3 | S4 | S5 | S6,
    M1 | M2 | M3 | M4 | M5 | M6,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6,
    V1 | V2 | V3 | V4 | V5 | V6,
    A1 | A2 | A3 | A4 | A5 | A6
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6,
  M1 | M2 | M3 | M4 | M5 | M6,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6,
  V1 | V2 | V3 | V4 | V5 | V6,
  A1 | A2 | A3 | A4 | A5 | A6
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7,
    M1 | M2 | M3 | M4 | M5 | M6 | M7,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7,
    V1 | V2 | V3 | V4 | V5 | V6 | V7,
    A1 | A2 | A3 | A4 | A5 | A6 | A7
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7,
  M1 | M2 | M3 | M4 | M5 | M6 | M7,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7,
  V1 | V2 | V3 | V4 | V5 | V6 | V7,
  A1 | A2 | A3 | A4 | A5 | A6 | A7
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7,
  S8, M8, WM8, V8, A8
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8,
    V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8,
    A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
  t8: IType<S8, M8, WM8, V8, A8>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8,
  V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8,
  A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7,
  S8, M8, WM8, V8, A8,
  S9, M9, WM9, V9, A9
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9,
    V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9,
    A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
  t8: IType<S8, M8, WM8, V8, A8>,
  t9: IType<S9, M9, WM9, V9, A9>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9,
  V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9,
  A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9
  >;

export function union<
  S1, M1, WM1, V1, A1,
  S2, M2, WM2, V2, A2,
  S3, M3, WM3, V3, A3,
  S4, M4, WM4, V4, A4,
  S5, M5, WM5, V5, A5,
  S6, M6, WM6, V6, A6,
  S7, M7, WM7, V7, A7,
  S8, M8, WM8, V8, A8,
  S9, M9, WM9, V9, A9,
  S10, M10, WM10, V10, A10
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10,
    WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9 | WM10,
    V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10,
    A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9 | A10
    >,
  t1: IType<S1, M1, WM1, V1, A1>,
  t2: IType<S2, M2, WM2, V2, A2>,
  t3: IType<S3, M3, WM3, V3, A3>,
  t4: IType<S4, M4, WM4, V4, A4>,
  t5: IType<S5, M5, WM5, V5, A5>,
  t6: IType<S6, M6, WM6, V6, A6>,
  t7: IType<S7, M7, WM7, V7, A7>,
  t8: IType<S8, M8, WM8, V8, A8>,
  t9: IType<S9, M9, WM9, V9, A9>,
  t10: IType<S10, M10, WM10, V10, A10>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10,
  WM1 | WM2 | WM3 | WM4 | WM5 | WM6 | WM7 | WM8 | WM9 | WM10,
  V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10,
  A1 | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9 | A10
  >;


// base
export function union<S, M, WM, V, A>(...args: any[]): IType<S, M, WM, V, A> {
  return mbst.types.union(...args) as any;
}
