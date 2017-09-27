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
