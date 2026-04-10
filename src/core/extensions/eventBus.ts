type EventHandler<T = unknown> = (payload: T) => void;

class EventBus {
  private events = new Map<string, Set<EventHandler>>();

  on<T>(event: string, handler: EventHandler<T>) {
    const handlers = this.events.get(event) || new Set<EventHandler>();
    handlers.add(handler as EventHandler);
    this.events.set(event, handlers);
    return () => this.off(event, handler);
  }

  off<T>(event: string, handler: EventHandler<T>) {
    this.events.get(event)?.delete(handler as EventHandler);
  }

  emit<T>(event: string, payload: T) {
    const handlers = this.events.get(event);
    if (!handlers) return;
    for (const handler of handlers) {
      handler(payload);
    }
  }
}

export const eventBus = new EventBus();
