import * as mbst from 'mobx-state-tree';
import { IComplexType, IType } from 'mobx-state-tree';

// up to 10 types, after that the type is lost as any
// it is ok to upgrade/downgrade it to IComplexType since unions loose their ability to be composed (though they still can be snapshotted)

// without dispatch
export function union<
  S1, M1,
  S2, M2
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
): IComplexType<
  S1 | S2,
  M1 | M2
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
): IComplexType<
  S1 | S2 | S3,
  M1 | M2 | M3
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
): IComplexType<
  S1 | S2 | S3 | S4,
  M1 | M2 | M3 | M4
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5,
  M1 | M2 | M3 | M4 | M5
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6,
  M1 | M2 | M3 | M4 | M5 | M6
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7,
  M1 | M2 | M3 | M4 | M5 | M6 | M7
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7,
  S8, M8
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
  t8: IType<S8, M8>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7,
  S8, M8,
  S9, M9
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
  t8: IType<S8, M8>,
  t9: IType<S9, M9>
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7,
  S8, M8,
  S9, M9,
  S10, M10
  >(
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
  t8: IType<S8, M8>,
  t9: IType<S9, M9>,
  t10: IType<S10, M10>
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10
  >;


// with dispatch
export function union<
  S1, M1,
  S2, M2
  >(
  dispatch: (sn: S1 | S2) => IType<
    S1 | S2,
    M1 | M2
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
): IComplexType<
  S1 | S2,
  M1 | M2
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3
  >(
  dispatch: (sn: S1 | S2 | S3) => IType<
    S1 | S2 | S3,
    M1 | M2 | M3
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
): IComplexType<
  S1 | S2 | S3,
  M1 | M2 | M3
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4
  >(
  dispatch: (sn: S1 | S2 | S3 | S4) => IType<
    S1 | S2 | S3 | S4,
    M1 | M2 | M3 | M4
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
): IComplexType<
  S1 | S2 | S3 | S4,
  M1 | M2 | M3 | M4
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5) => IType<
    S1 | S2 | S3 | S4 | S5,
    M1 | M2 | M3 | M4 | M5
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5,
  M1 | M2 | M3 | M4 | M5
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6) => IType<
    S1 | S2 | S3 | S4 | S5 | S6,
    M1 | M2 | M3 | M4 | M5 | M6
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6,
  M1 | M2 | M3 | M4 | M5 | M6
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7,
    M1 | M2 | M3 | M4 | M5 | M6 | M7
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7,
  M1 | M2 | M3 | M4 | M5 | M6 | M7
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7,
  S8, M8
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
  t8: IType<S8, M8>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7,
  S8, M8,
  S9, M9
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
  t8: IType<S8, M8>,
  t9: IType<S9, M9>,
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9
  >;

export function union<
  S1, M1,
  S2, M2,
  S3, M3,
  S4, M4,
  S5, M5,
  S6, M6,
  S7, M7,
  S8, M8,
  S9, M9,
  S10, M10
  >(
  dispatch: (sn: S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10) => IType<
    S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
    M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10
    >,
  t1: IType<S1, M1>,
  t2: IType<S2, M2>,
  t3: IType<S3, M3>,
  t4: IType<S4, M4>,
  t5: IType<S5, M5>,
  t6: IType<S6, M6>,
  t7: IType<S7, M7>,
  t8: IType<S8, M8>,
  t9: IType<S9, M9>,
  t10: IType<S10, M10>
): IComplexType<
  S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10,
  M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10
  >;

// many of the same kind
export function union<S, M>(...types: IType<S, M>[]): IComplexType<S, M>;
export function union<S, M>(dispatch: (sn: S) => IType<S, M>, ...types: IType<S, M>[]): IComplexType<S, M>;

// many of any kind
export function union<S, M>(...types: IType<any, any>[]): IComplexType<S, M>;
export function union<S, M>(dispatch: (sn: S) => IType<any, any>, ...types: IType<any, any>[]): IComplexType<S, M>;

// base
export function union<S, M>(...args: any[]): IComplexType<S, M> {
  return mbst.types.union(...args) as any;
}
