import { IArrayChange, IArraySplice, IKeyValueMap, IListenable, IMapEntries, IMapEntry, IObservableArray, Lambda } from 'mobx';

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

// tslint:disable:member-ordering

// T should be readonly if possible
export type IReadOnlyObservableArray<T> = ReadonlyArray<T> & {
  // spliceWithArray(index: number, deleteCount?: number, newItems?: T[]): T[];
  observe(listener: (changeData: IArrayChange<T> | IArraySplice<T>) => void, fireImmediately?: boolean): Lambda;
  // intercept(handler: IInterceptor<IArrayWillChange<T> | IArrayWillSplice<T>>): Lambda;
  // intercept(handler: IInterceptor<IArrayChange<T> | IArraySplice<T>>): Lambda;
  // intercept<T>(handler: IInterceptor<IArrayChange<T> | IArraySplice<T>>): Lambda;
  // clear(): T[];
  peek(): T[];
  // replace(newItems: T[]): T[];
  find(predicate: (item: T, index: number, array: IObservableArray<T>) => boolean, thisArg?: any, fromIndex?: number): T;
  findIndex(predicate: (item: T, index: number, array: IObservableArray<T>) => boolean, thisArg?: any, fromIndex?: number): number;
  // remove(value: T): boolean;
  // move(fromIndex: number, toIndex: number): void;
};

// skip IInterceptable, V should be readonly if possible
export type ReadonlyObservableMap<V> = ReadonlyMap<string, V> & IListenable & {
  // enhancer: IEnhancer<V>;
  // name: string;
  // interceptors: null;
  // changeListeners: null;
  // dehancer: any;
  has(key: string): boolean;
  // set(key: string, value?: V | undefined): this;
  // delete(key: string): boolean;
  get(key: string): V | undefined;
  keys(): string[] & Iterator<string>;
  values(): V[] & Iterator<V>;
  entries(): IMapEntries<V> & Iterator<IMapEntry<V>>;
  forEach(callback: (value: V, key: string, object: ReadonlyMap<string, V>) => void, thisArg?: any): void;
  /** Merge another object into this object, returns this. */
  // merge(other: ObservableMap<V> | IKeyValueMap<V> | any): ObservableMap<V>;
  // clear(): void;
  // replace(values: ObservableMap<V> | IKeyValueMap<V> | any): ObservableMap<V>;
  readonly size: number;
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values might still be observable. For a deep clone use mobx.toJS.
   */
  toJS(): IKeyValueMap<V>;
  toJSON(): IKeyValueMap<V>;
  toString(): string;
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  // observe(listener: (changes: IMapChange<V>) => void, fireImmediately?: boolean): Lambda;
  // intercept(handler: IInterceptor<IMapWillChange<V>>): Lambda;
};

export type IReadonlyExtendedObservableMap<T> = ReadonlyObservableMap<T> & {
  // put(value: T | any): this;
};
