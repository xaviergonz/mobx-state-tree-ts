import * as array from './array';
import * as  compose from './compose';
import * as frozen from './frozen';
import * as identifier from './identifier';
import * as immutable from './immutable';
import * as late from './late';
import * as literal from './literal';
import * as map from './map';
import * as model from './model';
import { primitives } from './primitives';
import * as reference from './reference';
import * as refinement from './refinement';
import * as union from './union';

export const types = {
  ...array,
  ...compose,
  ...frozen,
  ...identifier,
  ...late,
  ...immutable,
  ...literal,
  ...map,
  ...model,
  ...primitives,
  ...reference,
  ...refinement,
  ...union,

  // maybe is implemented as maybeProp('x', xType)
  // optional is implemented as optProp('x', default, xType)

  // TODO: enumeration
};
