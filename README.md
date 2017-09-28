# mobx-state-tree-ts
###### A better typescript wrapper over mobx-state-tree.

The only difference with the public API of mobx-state-tree is how models are created.

Basically instead of this:
```js
import { types} from 'mobx-state-tree';

const Book = types.model('Book', {
  serialNumber: types.number,
  title: 'Some title',
  subtitle: types.maybe(types.string)
})
// views, actions, etc
;

```

You write this:
```js
import { types } from 'mobx-state-tree-ts'; // always import stuff from here instead of mobx-state-tree

const Book = types.model('Book')
  .prop('serialNumber', types.number)
  .optProp('title', types.string, 'Some title')
  .maybeProp('subtitle', types.string)
  // views, actions, etc
  ;
```

While the syntax looks a bit worse, thanks to that change you get a much improved typescript experience for mobx-state-tree.

Also whenever you want to assign a submodel snapshot to a model variable / map / array you will need to typecast it to ```typeof submodel.ReadonlyNodeType/WriteNodeType```
or use create on the snapshot, for example:
```js
import { types } from 'mobx-state-tree-ts'; // always import stuff from here instead of mobx-state-tree

const Book = types.model('Book')
  .prop('title', types.string)
  ;

const TwoBooks = types.model()
  .prop('book1', Book)
  .prop('book2', Book)
  ;

// create a twoBooks instance, then...

// either this
twoBooks.book1 = Book.create({
  title: 'some book'
}); // if the model is unprotected then as typeof Book.WriteNodeType is needed

// or this
twoBooks.book1 = {
  title: 'some book'
} as typeof Book.ReadonlyNodeType; 
```

As an extra, each model includes the following types:
* **ModelType:** the type of the model itself
* **SnapshotType:** the type for the model's snapshot
* **ReadonlyNodeType:** the type for a readonly (protected) node instance of the model
* **WriteNodeType:** the type for a writeable (unprotected) node instance of the model
