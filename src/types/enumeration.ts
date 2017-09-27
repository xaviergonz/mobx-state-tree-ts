import * as mbst from 'mobx-state-tree';
import { ISimpleType } from '../';

// signatures are generated using following script:

// console.log(Array(20).fill(0).map((_, length) => {
//     const args = Array(length + 2).fill(0).map((_, idx) => "E" + idx)
//     return `export function enumeration<${args.map(arg => arg + " extends string").join(", ")}>(name: string, options: [${args.join(", ")}]): ISimpleType<${args.join(" | ")}>
// export function enumeration<${args.map(arg => arg + " extends string").join(", ")}>(options: [${args.join(", ")}]): ISimpleType<${args.join(" | ")}>`
// }).join("\n"))

// tslint:disable:max-line-length
// tslint:disable:semicolon

export function enumeration<E0 extends string, E1 extends string>(name: string, options: [E0, E1]): ISimpleType<E0 | E1>
export function enumeration<E0 extends string, E1 extends string>(options: [E0, E1]): ISimpleType<E0 | E1>
export function enumeration<E0 extends string, E1 extends string, E2 extends string>(name: string, options: [E0, E1, E2]): ISimpleType<E0 | E1 | E2>
export function enumeration<E0 extends string, E1 extends string, E2 extends string>(options: [E0, E1, E2]): ISimpleType<E0 | E1 | E2>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string>(name: string, options: [E0, E1, E2, E3]): ISimpleType<E0 | E1 | E2 | E3>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string>(options: [E0, E1, E2, E3]): ISimpleType<E0 | E1 | E2 | E3>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string>(
  name: string, options: [E0, E1, E2, E3, E4]): ISimpleType<E0 | E1 | E2 | E3 | E4>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string>(options: [E0, E1, E2, E3, E4]): ISimpleType<E0 | E1 | E2 | E3 | E4>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string>(options: [E0, E1, E2, E3, E4, E5]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string>(options: [E0, E1, E2, E3, E4, E5, E6]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string>(
  name: string, options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string, E16 extends string>(
  name: string,
  options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16]
): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15 | E16>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string, E16 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15 | E16>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string, E16 extends string, E17 extends string>(
  name: string,
  options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17]
): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15 | E16 | E17>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string, E16 extends string, E17 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15 | E16 | E17>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string, E16 extends string, E17 extends string, E18 extends string>(
  name: string,
  options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17, E18]
): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15 | E16 | E17 | E18>
export function enumeration<E0 extends string, E1 extends string, E2 extends string, E3 extends string, E4 extends string, E5 extends string, E6 extends string, E7 extends string, E8 extends string, E9 extends string, E10 extends string, E11 extends string, E12 extends string, E13 extends string, E14 extends string, E15 extends string, E16 extends string, E17 extends string, E18 extends string>(options: [E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17, E18]): ISimpleType<E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 | E11 | E12 | E13 | E14 | E15 | E16 | E17 | E18> // generic forms
export function enumeration(options: string[]): ISimpleType<string>
export function enumeration(name: string, options: string[]): ISimpleType<string>

// base
export function enumeration(name: string | string[], options?: any): ISimpleType<string> {
  return mbst.types.enumeration(name as any, options) as any;
}
