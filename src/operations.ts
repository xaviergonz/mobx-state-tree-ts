import * as mbst from 'mobx-state-tree';
import { IProtectedStateTreeNode, IStateTreeNode, IType, IUnprotectedStateTreeNode } from './interfaces';
import { DeepReadonly } from './utils';

// tslint:disable:interface-over-type-literal
// tslint:disable:no-empty-interface

// operations
export const addDisposer = mbst.addDisposer;
export const addMiddleware = mbst.addMiddleware;
export const applyAction = mbst.applyAction;
export const applyPatch = mbst.applyPatch;

export function applySnapshot<S, M, WM, V, A>(target: IStateTreeNode<S, M, WM, V, A>, snapshot: S): void {
  mbst.applySnapshot(target, snapshot);
}

export const clone = mbst.clone;
export const decorate = mbst.decorate;
export const destroy = mbst.destroy;
export const detach = mbst.detach;
export const escapeJsonPath = mbst.escapeJsonPath;
export const getChildType = mbst.getChildType; // TODO: maybe can be improved?
export const getEnv = mbst.getEnv;
export const getParent = mbst.getParent;
export const getPath = mbst.getPath;
export const getPathParts = mbst.getPathParts;
export const getRelativePath = mbst.getRelativePath;
export const getRoot = mbst.getRoot;

// generated snapshots are readonly
export function getSnapshot<S, M, WM, V, A>(target: IStateTreeNode<S, M, WM, V, A>): DeepReadonly<S> {
  return mbst.getSnapshot(target);
}

export function getType<S, M, WM, V, A>(object: IStateTreeNode<S, M, WM, V, A>): IType<S, M, WM, V, A> {
  return mbst.getType(object) as any;
}

export const hasParent = mbst.hasParent;
export const isAlive = mbst.isAlive;
export const isProtected = mbst.isProtected;
export const isRoot = mbst.isRoot;

export function isStateTreeNode<S, M, WM, V, A>(object: IStateTreeNode<S, M, WM, V, A>): object is IStateTreeNode<S, M, WM, V, A> {
  return mbst.isStateTreeNode(object);
}

export const onAction = mbst.onAction;
export const onPatch = mbst.onPatch;
export const onSnapshot = mbst.onSnapshot;
export const process = mbst.process;

export function protect<S, M, WM, V, A>(target: IStateTreeNode<S, M, WM, V, A>): IProtectedStateTreeNode<S, M, WM, V, A> {
  mbst.protect(target);
  return target as IProtectedStateTreeNode<S, M, WM, V, A>;
}

export const recordActions = mbst.recordActions;
export const recordPatches = mbst.recordPatches;
export const resolveIdentifier = mbst.resolveIdentifier; // TODO: improve
export const resolvePath = mbst.resolvePath; // TODO: improve
export const tryResolve = mbst.tryResolve; // TODO: improve
export const unescapeJsonPath = mbst.unescapeJsonPath;

export function unprotect<S, M, WM, V, A>(target: IStateTreeNode<S, M, WM, V, A>): IUnprotectedStateTreeNode<S, M, WM, V, A> {
  mbst.unprotect(target);
  return target as IUnprotectedStateTreeNode<S, M, WM, V, A>;
}

export const walk = mbst.walk;
