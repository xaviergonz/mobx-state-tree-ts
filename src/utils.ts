// tslint:disable:interface-over-type-literal

export type SinglePropertyObject<PropName extends string, PropType> = {
  [P in PropName]: PropType;
  };

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
