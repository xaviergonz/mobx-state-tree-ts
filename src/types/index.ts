// noinspection ES6UnusedImports
import { IArrayChange, IArraySplice, IKeyValueMap, IListenable, IObservableArray, Lambda } from 'mobx';
// noinspection ES6UnusedImports
import { IExtendedObservableMap } from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { DeepReadonly, IType } from '../';
import * as array from './array';
import * as compose from './compose';
import * as enumeration from './enumeration';
import * as frozen from './frozen';
import * as identifier from './identifier';
import * as late from './late';
import * as literal from './literal';
import * as map from './map';
import * as model from './model';
import { primitives } from './primitives';
import * as reference from './reference';
import * as refinement from './refinement';
import * as union from './union';

// tslint:disable-next-line:no-default-export
export default {
  array: array.array,
  compose: compose.compose,
  frozen: frozen.frozen,
  identifier: identifier.identifier,
  late: late.late,
  literal: literal.literal,
  map: map.map,
  model: model.model,
  ...primitives,
  reference: reference.reference,
  refinement: refinement.refinement,
  union: union.union,
  enumeration: enumeration.enumeration,

  // maybe is implemented as maybeProp('x', xType)
  // optional is implemented as optProp('x', default, xType)
};
