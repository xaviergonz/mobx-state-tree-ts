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
  recordActions,
  recordPatches,
  unescapeJsonPath,
  walk
} from 'mobx-state-tree';
import { IProtectedStateTreeNode, IStateTreeNode, IType, IUnprotectedStateTreeNode } from './interfaces';
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
};

export function applySnapshot<S, M, WM>(target: IStateTreeNode<S, M, WM>, snapshot: S): void {
  mbst.applySnapshot(target, snapshot);
}

// generated snapshots are readonly
export function getSnapshot<S, M, WM>(target: IStateTreeNode<S, M, WM>): DeepReadonly<S> {
  return mbst.getSnapshot(target);
}

export function getType<S, M, WM>(object: IStateTreeNode<S, M, WM>): IType<S, M, WM> {
  return mbst.getType(object) as any;
}

export function isStateTreeNode<S, M, WM>(object: IStateTreeNode<S, M, WM>): object is IStateTreeNode<S, M, WM> {
  return mbst.isStateTreeNode(object);
}

export function protect<S, M, WM>(target: IStateTreeNode<S, M, WM>): IProtectedStateTreeNode<S, M, WM> {
  mbst.protect(target);
  return target as IProtectedStateTreeNode<S, M, WM>;
}

export function resolveIdentifier<S, M, WM>(
  type: IType<S, M, WM>,
  target: IProtectedStateTreeNode<any, any, any>,
  id: string | number
): IProtectedStateTreeNode<S, M, WM> | undefined;
export function resolveIdentifier<S, M, WM>(
  type: IType<S, M, WM>,
  target: IUnprotectedStateTreeNode<any, any, any>,
  id: string | number
): IUnprotectedStateTreeNode<S, M, WM> | undefined;
export function resolveIdentifier<S, M, WM>(
  type: IType<S, M, WM>,
  target: IStateTreeNode<any, any, any>,
  id: string | number
): IStateTreeNode<S, M, WM> | undefined {
  return mbst.resolveIdentifier(type as any, target, id) as any;
}

export function resolvePath<T>(target: IStateTreeNode<any, any, any>, path: string): T | undefined {
  return mbst.resolvePath(target, path);
}

export function tryResolve<T>(target: IStateTreeNode<any, any, any>, path: string): T | undefined {
  return mbst.tryResolve(target, path);
}

export function unprotect<S, M, WM>(target: IStateTreeNode<S, M, WM>): IUnprotectedStateTreeNode<S, M, WM> {
  mbst.unprotect(target);
  return target as IUnprotectedStateTreeNode<S, M, WM>;
}
