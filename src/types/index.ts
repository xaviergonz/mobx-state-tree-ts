// noinspection ES6UnusedImports
import { IObservableArray } from 'mobx';
// noinspection ES6UnusedImports
import * as mbst from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { IComplexType, IExtendedObservableMap, ISimpleType, IType } from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { IContextEntry } from 'mobx-state-tree/dist/core/type/type-checker';
// noinspection ES6UnusedImports
import { IModelType } from '../';
import * as compose from './compose';
import * as identifier from './identifier';
import * as late from './late';
import * as model from './model';
import * as reference from './reference';
import * as refinement from './refinement';
import * as union from './union';


// tslint:disable-next-line:no-default-export
export default {
  enumeration: mbst.types.enumeration,
  model: model.model,
  compose: compose.compose,
  custom: mbst.types.custom,
  reference: reference.reference,
  union: union.union,
  // optional is implemented as optProp('x', default, xType)
  literal: mbst.types.literal,
  // maybe is implemented as maybeProp('x', xType)
  refinement: refinement.refinement,
  string: mbst.types.string,
  boolean: mbst.types.boolean,
  number: mbst.types.number,
  Date: mbst.types.Date,
  map: mbst.types.map,
  array: mbst.types.array,
  frozen: mbst.types.frozen,
  identifier: identifier.identifier,
  late: late.late,
  undefined: mbst.types.undefined,
  null: mbst.types.null,
};
