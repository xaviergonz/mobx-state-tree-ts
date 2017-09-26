import * as array from './array';
import * as identifier from './identifier';
import * as immutable from './immutable';
import * as literal from './literal';
import * as map from './map';
import * as model from './model';
import { primitives } from './primitives';
import * as refinement from './refinement';

export const types = {
  ...array,
  ...identifier,
  ...immutable,
  ...literal,
  ...map,
  ...model,
  ...primitives,
  ...refinement,

  // compose is implemented as IModelType.compose, so it can be used as xType.compose(yType).compose(zType)
  // maybe is implemented as maybeProp('x', xType)
  // optional is implemented as optProp('x', default, xType)
  // union is implemented as IModelType.compose, so it can be used as xType.union(yType).union(zType)

  // TODO: enumeration
  // TODO: frozen
  // TODO: late
  // TODO: reference

};
