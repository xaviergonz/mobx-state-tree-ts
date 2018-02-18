import { IArrayChange, IArraySplice, IKeyValueMap, IListenable, IMapEntries, IMapEntry, IObservableArray, Lambda } from 'mobx';

// tslint:disable:interface-over-type-literal

export type SinglePropertyObject<PropName extends string, PropType> = {
  [P in PropName]: PropType;
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
