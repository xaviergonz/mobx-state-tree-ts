import { getSnapshot, protect, types, unprotect } from './index';
import { onAction, resolveIdentifier, resolvePath } from './operations';

// anything other than 4 or 'hi' or 'hello' is compile error
const typesHiOr4 = types.union(types.literal(4), types.literal('hi'), types.literal('hello'));
const positiveNumber = types.refinement('positive number', types.number, (x) => x >= 0);
const color = types.enumeration('color', [ 'red', 'green', 'blue' ]);

// name could be moved to model().name('somename')
const subModel = types.model()
  .prop('id', types.identifier())
  .prop('subX', types.number)
  .optProp('subY', typesHiOr4, 4)
  .actions((self) => ({
    setSubY(val: typeof typesHiOr4.SnapshotType) {
      self.subY = val;
    }
  }));

const m = types.model()
  .optProp('id2', types.identifier(positiveNumber), 100)
  .prop('x', types.number)
  .optProp('y', types.number, 0)
  .prop('subModel1', subModel)
  .optProp('subModel2', types.immutable(subModel), { id: '0', subX: 5})
  .prop('subModelRef', types.reference(subModel))
  .optProp('color', color, 'green')
  .maybeProp('color2', color)
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

const mrefinement = types.refinement('model with x >= 4', m, (m2) => m2.x >= 4);

// everything here works
const node = m.create({
  id2: 5,
  x: 1,
  // a: -6, // OK: it throws due to refinement
  a: 6,
  subModel1: {
    id: '1',
    subX: 6,
  },
  subModelRef: '1'
});

const a: number = node.xSquared * node.aSquared;
node.setASquared();
node.setXSquared();
// node.x = 5; // fails since it is protected by default

const unprotectedNode = unprotect(node);
unprotectedNode.a = 5; // ok
unprotectedNode.subModel1.subX = 10; // ok
unprotectedNode.subModel1.subY = 4;
unprotectedNode.subModelRef.subY = 'hello'; // good, not readonly since unprotected
unprotectedNode.subModel1 = subModel.create({ // good, we can assign a node
  id: '1',
  subX: 8,
});
unprotectedNode.subModel1 = { // kinda MEH, we can assign a snapshot but we need to typecast it to the model type
  id: '1',
  subX: 7
} as typeof subModel.WriteNodeType;
const aaa: string | number = unprotectedNode.subModel1.subY;
const colorStr: string | null = unprotectedNode.color2;
unprotectedNode.color2 = 'red';
unprotectedNode.color2 = null;

const protectedNode = protect(unprotectedNode);
// protectedNode.x = 5; // fail since it is once more protected
// protectedNode.subModel1.subX = 6; // subobjs are protected as well

const subModelRef = node.subModelRef;
// subModelRef.subY = 4; // good, readonly
subModelRef.setSubY('hi');
console.log(subModelRef.subY);
console.log('REF', getSnapshot(subModelRef));

const subModelRef3 = resolveIdentifier(subModel, node, '1');
if (subModelRef3) {
  // subModelRef3.subY = 'hi'; // good, since the main node is protected then this one is declared as protected as well
  console.log('ref works', subModelRef3.subY);
}


const nodeSnapshot = getSnapshot(node);
// nodeSnapshot.a = 40; // good, snapshots are protected
console.log(nodeSnapshot);
// nodeSnapshot.setASquared(); // error: the snapshot does not have any actions
// nodeSnapshot.xSquared; // error: the snapshot does not have any views

const nodeSnapshot2: typeof m.SnapshotType = {
  x: 10,
  a: 20,
  subModel1: { // this has to be present, good!
    id: '100',
    subX: 5, // this has to be present, good!
    // subY: 'he', // it complains this should be 4, 'hi' or 'hello', good!
    subZ: 6 // NOT OK: kinda meh, it is not on the submodel and it doesn't complain it shouldn't be
  },
  subModelRef: '100',
};
nodeSnapshot2.x = 20;
/*
const modelOnly: typeof m.ModelType = {
  id2: 200,
  x: 10,
  y: 20,
  a: 30,
  b: 40,
  color: 'red', // good, works!
  // color: 'r', // good, this is not allowed
  color2: null,
  subModel1: { // this has to be present, good!
    id: '100',
    subX: 5, // this has to be present, good!
    subY: 4, // this has to be present and a 4 or 'hi' or 'hello', good!
  },
  subModel2: { // this has to be present, good!
    id: '200',
    subX: 5,  // this has to be present, good!
    // subY: 'he', // it complains this should be 4, 'hi' or 'hello', good!
    subY: 'hi', // this has to be present and a 4 or 'hi', good!
    subZ: 6 // NOT OK: kinda meh, it is not on the submodel and it doesn't complain it shouldn't be
  },
  subModelRef: { // the reference in a model has to be the whole model, good!
    id: '100',
    subX: 5,
    subY: 4,
  }
};
// modelOnly.x = 20; // error: cannot write to a model type
*/

// const brokenModelType: typeof m.ModelType = { // error: y is missing
//   x: 10,
//   a: 30,
//   b: 40,
// };
//

const mergedType = types.compose(m, subModel);
const mergedSnapshot: typeof mergedType.SnapshotType = {
  id: '3',
  x: 5,
  subModel1: {
    id: '100',
    subX: 6,
  },
  a: 7,
  subX: 4,
  subY: 'hello',
  subModelRef: '100',
};

const Book = types.model('Book')
  .prop('title', types.string)
  .prop('price', types.number)
  .prop('date', types.Date)
  .actions((self) => ({
    setPrice(newPrice: number) {
      self.price = newPrice;
    }
  }));

const Store = types.model('Store')
  .prop('books', types.array(Book))
  .optProp('booksMap', types.map(Book), {})
;

const store = Store.create({
  books: [{
    title: 'The Hidden Life of Trees: What They Feel, How They Communicate',
    price: 24.95,
    date: 1234,
  }],
  booksMap: {
    111: {
      title: 'The Hidden Life of Trees: What They Feel, How They Communicate',
      price: 24.95,
      date: 1234,
    }
  }
});

console.log('MAP TITLE:', store.booksMap.get('111')!.title);
// store.booksMap.set // good no setter

// store.books[0].title = 'I hate trees!'; // good! not allowed since the node is in protected mode

onAction(store, (act) => console.dir(act));

const book = store.books[0];
// book.price = 5; // good we can't
book.setPrice(12.95);
// book.date = 1234; // good we cant
console.log(book.date.getMilliseconds());
console.log(getSnapshot(store));

// store.books[0] = {}; // good, not allowed

const unprotectedStore = unprotect(store);
unprotectedStore.books[0].price = 5; // good we can
unprotectedStore.books[0].date = 12345;
console.log(unprotectedStore.books[0].date);
unprotectedStore.books[0].date = Date.now();
console.log(unprotectedStore.books[0].date);
console.log(getSnapshot(unprotectedStore));

unprotectedStore.books[0] = Book.create({
  title: 'some title',
  price: 4,
  date: 1234
}) as typeof Book.WriteNodeType; // not ok, shame this is needed when the model is unprotected

unprotectedStore.booksMap.set('111', {
  title: 'title set on setter',
  price: 24.95,
  date: 1234,
} as typeof Book.WriteNodeType);
unprotectedStore.booksMap.get('111')!.title = 'title set on getter';
console.log('MAP TEST 2', getSnapshot(unprotectedStore));

const simpleM1 = types.model().prop('x', types.number).optProp('a', types.number, 4);
const simpleM2 = types.model().prop('y', types.number);
const simpleM3 = types.model().prop('z', types.number);
const theunion  = types.union(simpleM1, simpleM2, simpleM3);
const m1m2node = theunion.create({
  x: 2,
});
console.log(getSnapshot(m1m2node));
const subModel111 = resolvePath<typeof subModel.ReadonlyNodeType>(node, '/subModel1');
if (subModel111) {
  console.log(subModel111.subY);
}
