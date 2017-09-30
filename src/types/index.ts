// noinspection ES6UnusedImports
import { IObservableArray } from 'mobx';
// noinspection ES6UnusedImports
import * as mbst from 'mobx-state-tree';
import { IComplexType, IExtendedObservableMap, ISimpleType, IType } from 'mobx-state-tree';
// noinspection ES6UnusedImports
import { IContextEntry } from 'mobx-state-tree/dist/types/type-checker';
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
  array: mbst.types.array,
  compose: compose.compose,
  frozen: mbst.types.frozen,
  identifier: identifier.identifier,
  late: late.late,
  literal: mbst.types.literal,
  map: mbst.types.map,
  model: model.model,

  boolean: mbst.types.boolean,
  null: mbst.types.null,
  number: mbst.types.number,
  string: mbst.types.string,
  Date: mbst.types.Date,
  undefined: mbst.types.undefined,

  reference: reference.reference,
  refinement: refinement.refinement,
  union: union.union,
  enumeration: mbst.types.enumeration,

  // maybe is implemented as maybeProp('x', xType)
  // optional is implemented as optProp('x', default, xType)
};
