class CapabilityRegistry {
  private capabilities = new Map<string, unknown>();

  register<T>(key: string, capability: T) {
    this.capabilities.set(key, capability);
  }

  get<T>(key: string): T | undefined {
    return this.capabilities.get(key) as T | undefined;
  }

  list() {
    return Array.from(this.capabilities.keys());
  }
}

export const capabilityRegistry = new CapabilityRegistry();
