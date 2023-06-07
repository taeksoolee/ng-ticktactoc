export class Utils {
  static createGrid(size: number=2, val: number=0) {
    return Array.from(
      {length: size}, () => Array.from({length: size}, () => val)
    );
  }

  static clone<T extends Array<unknown> | Record<string, unknown>>(val: T) {
    return JSON.parse(JSON.stringify(val)) as T;
  }
}
