import * as mbst from 'mobx-state-tree';
import {
  addDisposer,
  addMiddleware,
  applyAction,
  applyPatch,
  clone,
  createActionTrackingMiddleware,
  decorate,
  destroy,
  detach,
  escapeJsonPath,
  flow,
  getChildType,
  getEnv,
  getIdentifier,
  getMembers,
  getParent,
  getPath,
  getPathParts,
  getRelativePath,
  getRoot,
  getSnapshot,
  getType,
  hasParent,
  isAlive,
  isProtected,
  isRoot,
  isStateTreeNode,
  IType,
  onAction,
  onPatch,
  onSnapshot,
  protect,
  recordActions,
  recordPatches,
  typecheck,
  unescapeJsonPath,
  unprotect,
  walk
} from 'mobx-state-tree';

import { ISnapshottable, IStateTreeNode } from './interfaces';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// operations
export {
  addDisposer,
  addMiddleware,
  applyAction,
  applyPatch,
  clone,
  createActionTrackingMiddleware,
  decorate,
  destroy,
  detach,
  escapeJsonPath,
  flow,
  getChildType, // TODO: maybe can be improved?
  getEnv,
  getIdentifier,
  getMembers,
  getParent,
  getPath,
  getPathParts,
  getRelativePath,
  getRoot,
  getSnapshot,
  getType,
  hasParent,
  isAlive,
  isProtected,
  isRoot,
  isStateTreeNode,
  onAction,
  onPatch,
  onSnapshot,
  protect,
  recordActions,
  recordPatches,
  typecheck,
  unescapeJsonPath,
  unprotect,
  walk,
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
  return mbst.resolveIdentifier(type, target, id);
}

export function resolvePath<T>(target: IStateTreeNode, path: string): T | undefined {
  return mbst.resolvePath(target, path);
}

export function tryResolve<T>(target: IStateTreeNode, path: string): T | undefined {
  return mbst.tryResolve(target, path);
}
