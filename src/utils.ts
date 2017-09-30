import { IArrayChange, IArraySplice, IKeyValueMap, IListenable, IMapEntries, IMapEntry, IObservableArray, Lambda } from 'mobx';

// tslint:disable:interface-over-type-literal

export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

export type SinglePropertyObject<PropName extends string, PropType> = {
  [P in PropName]: PropType;
  };

/**
 * Utilies types based on:
 * https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
export type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };
