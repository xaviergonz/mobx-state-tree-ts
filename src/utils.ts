export type IDeepReadonly<T> = {
  readonly [P in keyof T]: IDeepReadonly<T[P]>;
  };

export type ISinglePropertyObject<PropName extends string, PropType> = {
  [P in PropName]: PropType;
  };
