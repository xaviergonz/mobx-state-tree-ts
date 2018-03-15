// tslint:disable:interface-over-type-literal

export type SinglePropertyObject<PropName extends string, PropType> = {
  [P in PropName]: PropType;
  };

// TODO: change this to proper Diff once we hit TS 2.8
export type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };
