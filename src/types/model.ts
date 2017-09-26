import * as mbst from 'mobx-state-tree';
import { IModelType } from '../';

export function model(name?: string): IModelType<
  {}, // S
  Readonly<{}>, // M
  {}, // WM
  {}, // V
  {} // A
  > {
  if (name) {
    return mbst.types.model(name, {}) as any;
  }
  return mbst.types.model({}) as any;
}
