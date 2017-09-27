import * as mbst from 'mobx-state-tree';

// polyfill IModelType
const ObjectTypePrototype = (mbst.types.model() as any).constructor.prototype;

ObjectTypePrototype.prop = function(pname: string, type: any): any {
  return this.props({
    [pname]: type
  });
};

ObjectTypePrototype.optProp = function(pname: string, type: any, defValue: any): any {
  return this.props({
    [pname]: mbst.types.optional(type, defValue)
  });
};

ObjectTypePrototype.maybeProp = function(pname: string, type: any): any {
  return this.props({
    [pname]: mbst.types.maybe(type)
  });
};


// polyfill all other types
// TODO: remove this section, since union is now ok as usual
/*
const allPrototypes: any[] = [
  mbst.types.null, // CoreType
  mbst.types.map(mbst.types.number), // MapType
  mbst.types.array(mbst.types.number), // ComplexType
  mbst.types.model(), // ObjectTypePrototype, compose
  mbst.types.union(mbst.types.number, mbst.types.boolean), // Union, enumeration
  mbst.types.optional(mbst.types.number, 5), // OptionalValue, maybe
  mbst.types.literal(5), // LiteralType
  mbst.types.refinement(mbst.types.number, () => false), // Refinement
  mbst.types.late(() => mbst.types.number), // Late
  mbst.types.frozen, // Frozen
  mbst.types.identifier(), // IdentifierType
  mbst.types.reference(mbst.types.model()), // IdentifierType
];

function _union(t1: any, t2: any, dispatch?: any): any {
  if (dispatch) {
    return mbst.types.union(dispatch as any, t1 as any, t2 as any) as any;
  }
  else {
    return mbst.types.union(t1 as any, t2 as any) as any;
  }
}

allPrototypes.forEach((p: any) => {
  p.constructor.prototype.union = function(t: any, dispatch: any): any {
    return _union(this, t, dispatch);
  };
});
*/
