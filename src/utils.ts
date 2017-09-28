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

export type ReadonlyDate = {
  /** Returns a string representation of a date. The format of the string depends on the locale. */
  toString(): string;
  /** Returns a date as a string value. */
  toDateString(): string;
  /** Returns a time as a string value. */
  toTimeString(): string;
  /** Returns a value as a string value appropriate to the host environment's current locale. */
  toLocaleString(): string;
  /** Returns a date as a string value appropriate to the host environment's current locale. */
  toLocaleDateString(): string;
  /** Returns a time as a string value appropriate to the host environment's current locale. */
  toLocaleTimeString(): string;
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  valueOf(): number;
  /** Gets the time value in milliseconds. */
  getTime(): number;
  /** Gets the year, using local time. */
  getFullYear(): number;
  /** Gets the year using Universal Coordinated Time (UTC). */
  getUTCFullYear(): number;
  /** Gets the month, using local time. */
  getMonth(): number;
  /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
  getUTCMonth(): number;
  /** Gets the day-of-the-month, using local time. */
  getDate(): number;
  /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
  getUTCDate(): number;
  /** Gets the day of the week, using local time. */
  getDay(): number;
  /** Gets the day of the week using Universal Coordinated Time (UTC). */
  getUTCDay(): number;
  /** Gets the hours in a date, using local time. */
  getHours(): number;
  /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
  getUTCHours(): number;
  /** Gets the minutes of a Date object, using local time. */
  getMinutes(): number;
  /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
  getUTCMinutes(): number;
  /** Gets the seconds of a Date object, using local time. */
  getSeconds(): number;
  /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCSeconds(): number;
  /** Gets the milliseconds of a Date, using local time. */
  getMilliseconds(): number;
  /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCMilliseconds(): number;
  /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
  getTimezoneOffset(): number;
  /**
   * Sets the date and time value in the Date object.
   * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   */
  // setTime(time: number): number;
  /**
   * Sets the milliseconds value in the Date object using local time.
   * @param ms A numeric value equal to the millisecond value.
   */
  // setMilliseconds(ms: number): number;
  /**
   * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
   * @param ms A numeric value equal to the millisecond value.
   */
  // setUTCMilliseconds(ms: number): number;

  /**
   * Sets the seconds value in the Date object using local time.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  // setSeconds(sec: number, ms?: number): number;
  /**
   * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  // setUTCSeconds(sec: number, ms?: number): number;
  /**
   * Sets the minutes value in the Date object using local time.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  // setMinutes(min: number, sec?: number, ms?: number): number;
  /**
   * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  // setUTCMinutes(min: number, sec?: number, ms?: number): number;
  /**
   * Sets the hour value in the Date object using local time.
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  // setHours(hours: number, min?: number, sec?: number, ms?: number): number;
  /**
   * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  // setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
  /**
   * Sets the numeric day-of-the-month value of the Date object using local time.
   * @param date A numeric value equal to the day of the month.
   */
  // setDate(date: number): number;
  /**
   * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
   * @param date A numeric value equal to the day of the month.
   */
  // setUTCDate(date: number): number;
  /**
   * Sets the month value in the Date object using local time.
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
   */
  // setMonth(month: number, date?: number): number;
  /**
   * Sets the month value in the Date object using Universal Coordinated Time (UTC).
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
   */
  // setUTCMonth(month: number, date?: number): number;
  /**
   * Sets the year of the Date object using local time.
   * @param year A numeric value for the year.
   * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
   * @param date A numeric value equal for the day of the month.
   */
  // setFullYear(year: number, month?: number, date?: number): number;
  /**
   * Sets the year value in the Date object using Universal Coordinated Time (UTC).
   * @param year A numeric value equal to the year.
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
   * @param date A numeric value equal to the day of the month.
   */
  // setUTCFullYear(year: number, month?: number, date?: number): number;
  /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
  toUTCString(): string;
  /** Returns a date as a string value in ISO format. */
  toISOString(): string;
  /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
  toJSON(key?: any): string;
};
