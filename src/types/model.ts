import * as mbst from 'mobx-state-tree';
import { OModelType } from '../';

export function model(name?: string): OModelType<
  {}, // S
  Readonly<{}>, // M
  {} // WM
  > {
  if (name) {
    return mbst.types.model(name, {}) as any;
  }
  return mbst.types.model({}) as any;
}
