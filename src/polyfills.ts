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
