export type LifecycleEvent = 'app:ready' | 'auth:login' | 'auth:logout' | 'plugin:loaded';

type LifecycleHandler = () => void | Promise<void>;

const hooks = new Map<LifecycleEvent, Set<LifecycleHandler>>();

export const registerLifecycleHook = (event: LifecycleEvent, handler: LifecycleHandler) => {
  const eventHooks = hooks.get(event) || new Set<LifecycleHandler>();
  eventHooks.add(handler);
  hooks.set(event, eventHooks);
  return () => eventHooks.delete(handler);
};

export const runLifecycleHook = async (event: LifecycleEvent) => {
  const eventHooks = hooks.get(event);
  if (!eventHooks) return;
  for (const handler of eventHooks) {
    await handler();
  }
};
