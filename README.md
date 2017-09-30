# mobx-state-tree-ts
###### Better typescript type definitions for mobx-state-tree

[![npm version](https://badge.fury.io/js/mobx-state-tree-ts.svg)](https://badge.fury.io/js/mobx-state-tree-ts)

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

Also whenever you want to assign a submodel snapshot to a model variable / map / array you will need to either use create to create a node instance from the snapshot (recommended) or typecast it to ```typeof submodel.Type```.

For example:
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

// either this (recommended)
twoBooks.book1 = Book.create({
  title: 'some book'
}); 

// or this
twoBooks.book1 = {
  title: 'some book'
} as typeof Book.Type; 
```
