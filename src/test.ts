import { getSnapshot, protect, types, unprotect } from './index';

// anything other than 4 or 'hi' or 'hello' is compile error

const typesHiOr4 = types.literal(4).union(types.literal('hi')).union(types.literal('hello'));
const positiveNumber = types.refinement(types.number, (x) => x >= 0);

// name could be moved to model().name('somename')
const subModel = types.model()
  .prop('subX', types.number)
  .optProp('subY', typesHiOr4, 4)
  .actions((self) => ({
    setSubY(val: typeof typesHiOr4.SnapshotType) {
      self.subY = val;
    }
  }));

const m = types.model()
  .optProp('id', types.identifier(positiveNumber), 100)
  .prop('x', types.number)
  .optProp('y', types.number, 0)
  .prop('subModel1', subModel)
  .optProp('subModel2', types.immutable(subModel), { subX: 5})
  .views((self) => ({
      get xSquared() {
        // self.x = 20; // views cannot do model changes, good!
        // self.subModel1.setSubY(4); // good, we cannot access subactions from views
        return self.x * self.x;
      },
      get ySquared() {
        return self.y * self.y;
      },
    })
  )
  .actions((self) => ({
    setXSquared() {
      self.x = self.xSquared;
      self.subModel1.subX = 5;
      self.subModel1.setSubY(4); // good, we can access sub actions from actions
      // self.subModel2.subX = 5; // since this other submodel is immutable this gives a compiler error, good!
    },
  }))
  .prop('a', positiveNumber)
  .optProp('b', types.number, 5)
  .views((self) => ({
      get aSquared() {
        // self.setXSquared(); // actions are not available to views, good!
        return self.a * self.a;
      }
    })
  )
  .actions((self) => ({
    setASquared() {
      self.setXSquared(); // old actions are available to future actions, good!
      self.a = self.aSquared;
    }
  }))
;

// everything here works
const node = m.create({
  id: 5,
  x: 1,
  // a: -6, // OK: it throws due to refinement
  a: 6,
  subModel1: {
    subX: 6,
  }
});
const a: number = node.xSquared * node.aSquared;
node.setASquared();
node.setXSquared();
// node.x = 5; // fails since it is protected by default
const unprotectedNode = unprotect(node);
unprotectedNode.a = 5; // ok
unprotectedNode.subModel1.subX = 10; // ok
const protectedNode = protect(unprotectedNode);
// protectedNode.x = 5; // fail since it is once more protected
// protectedNode.subModel1.subX = 6; // subobjs are protected as well

const nodeSnapshot = getSnapshot(node);
// nodeSnapshot.a = 40; // good, snapshots are protected
console.log(nodeSnapshot);
// nodeSnapshot.setASquared(); // error: the snapshot does not have any actions
// nodeSnapshot.xSquared; // error: the snapshot does not have any views

const nodeSnapshot2: typeof m.SnapshotType = {
  x: 10,
  a: 20,
  subModel1: { // this has to be present, good!
    subX: 5, // this has to be present, good!
    // subY: 'he', // it complains this should be 4, 'hi' or 'hello', good!
    subZ: 6 // NOT OK: kinda meh, it is not on the submodel and it doesn't complain it shouldn't be
  }
};
nodeSnapshot2.x = 20;

const modelOnly: typeof m.ModelType = {
  id: 200,
  x: 10,
  y: 20,
  a: 30,
  b: 40,
  subModel1: { // this has to be present, good!
    subX: 5, // this has to be present, good!
    subY: 4, // this has to be present and a 4 or 'hi' or 'hello', good!
  },
  subModel2: { // this has to be present, good!
    subX: 5,  // this has to be present, good!
    // subY: 'he', // it complains this should be 4, 'hi' or 'hello', good!
    subY: 'hi', // this has to be present and a 4 or 'hi', good!
    subZ: 6 // NOT OK: kinda meh, it is not on the submodel and it doesn't complain it shouldn't be
  }

};
// modelOnly.x = 20; // error: cannot write to a model type

// const brokenModelType: typeof m.ModelType = { // error: y is missing
//   x: 10,
//   a: 30,
//   b: 40,
// };
//

const mergedType = m.compose(subModel);
const mergedSnapshot: typeof mergedType.SnapshotType = {
  x: 5,
  subModel1: {
    subX: 6,
  },
  a: 7,
  subX: 4,
  subY: 'hello'
};
