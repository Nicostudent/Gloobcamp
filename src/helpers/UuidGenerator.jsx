export function UuidGenerator() {
    return Math.random().toString(36).substr(2, 5).toUpperCase();
  }