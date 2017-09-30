import * as mbst from 'mobx-state-tree';
import {
  addDisposer,
  addMiddleware,
  applyAction,
  applyPatch,
  clone,
  decorate,
  destroy,
  detach,
  escapeJsonPath,
  getChildType,
  getEnv,
  getParent,
  getPath,
  getPathParts,
  getRelativePath,
  getRoot,
  getSnapshot,
  getType,
  hasParent,
  isAlive,
  ISnapshottable,
  isProtected,
  isRoot,
  isStateTreeNode,
  IStateTreeNode,
  IType,
  onAction,
  onPatch,
  onSnapshot,
  process,
  protect,
  recordActions,
  recordPatches,
  unescapeJsonPath,
  unprotect,
  walk
} from 'mobx-state-tree';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// operations
export {
  addDisposer,
  addMiddleware,
  applyAction,
  applyPatch,
  clone,
  decorate,
  destroy,
  detach,
  escapeJsonPath,
  getChildType, // TODO: maybe can be improved?
  getEnv,
  getParent,
  getPath,
  getPathParts,
  getRelativePath,
  getRoot,
  hasParent,
  isAlive,
  isProtected,
  isRoot,
  onAction,
  onPatch,
  onSnapshot,
  process,
  recordActions,
  recordPatches,
  unescapeJsonPath,
  walk,
  protect,
  unprotect,
  getSnapshot,
  getType,
  isStateTreeNode
};

export function applySnapshot<S>(target: IStateTreeNode & ISnapshottable<S>, snapshot: S): void {
  mbst.applySnapshot(target, snapshot);
}

export function resolveIdentifier<S, M>(
  type: IType<S, M>,
  target: IStateTreeNode,
  id: string | number
): (IStateTreeNode & M) | undefined;
export function resolveIdentifier<S, M>(
  type: IType<S, M>,
  target: IStateTreeNode,
  id: string | number
): (IStateTreeNode & M) | undefined;
export function resolveIdentifier<S, M>(
  type: IType<S, M>,
  target: IStateTreeNode,
  id: string | number
): (IStateTreeNode & M) | undefined {
  return mbst.resolveIdentifier(type as any, target, id) as any;
}

export function resolvePath<T>(target: IStateTreeNode, path: string): T | undefined {
  return mbst.resolvePath(target, path);
}

export function tryResolve<T>(target: IStateTreeNode, path: string): T | undefined {
  return mbst.tryResolve(target, path);
}
