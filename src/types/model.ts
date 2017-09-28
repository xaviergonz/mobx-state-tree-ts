import * as mbst from 'mobx-state-tree';
import { IOutModelType } from '../';

export function model(name?: string): IOutModelType<
  {}, // S
  Readonly<{}>, // M
  {} // WM
  > {
  if (name) {
    return mbst.types.model(name, {}) as any;
  }
  return mbst.types.model({}) as any;
}
