// noinspection ES6UnusedImports
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
  hasParent,
  isAlive,
  isProtected,
  isRoot,
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
import { IStateTreeNode, IType } from './interfaces';
import { DeepReadonly } from './utils';

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
  unprotect
};

export function applySnapshot<S, M>(target: IStateTreeNode<S, M>, snapshot: S): void {
  mbst.applySnapshot(target, snapshot);
}

// generated snapshots are readonly, but we don't use DeepReadonly for compatibility reasons
export function getSnapshot<S, M>(target: IStateTreeNode<S, M>): S {
  return mbst.getSnapshot(target);
}

export function getType<S, M>(object: IStateTreeNode<S, M>): IType<S, M> {
  return mbst.getType(object) as any;
}

export function isStateTreeNode<S, M>(object: IStateTreeNode<S, M>): object is IStateTreeNode<S, M> {
  return mbst.isStateTreeNode(object);
}

export function resolveIdentifier<S, M>(
  type: IType<S, M>,
  target: IStateTreeNode<any, any>,
  id: string | number
): IStateTreeNode<S, M> | undefined;
export function resolveIdentifier<S, M>(
  type: IType<S, M>,
  target: IStateTreeNode<any, any>,
  id: string | number
): IStateTreeNode<S, M> | undefined;
export function resolveIdentifier<S, M>(
  type: IType<S, M>,
  target: IStateTreeNode<any, any>,
  id: string | number
): IStateTreeNode<S, M> | undefined {
  return mbst.resolveIdentifier(type as any, target, id) as any;
}

export function resolvePath<T>(target: IStateTreeNode<any, any>, path: string): T | undefined {
  return mbst.resolvePath(target, path);
}

export function tryResolve<T>(target: IStateTreeNode<any, any>, path: string): T | undefined {
  return mbst.tryResolve(target, path);
}
