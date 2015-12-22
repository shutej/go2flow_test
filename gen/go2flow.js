/* @flow */

export function identity<T>(x: T): T {
  return x;
}

export function fmapArray<T, U>(fn: (t: T) => U): (a: ?Array<T>) => Array<U> {
  return function(x) {
    if (!x) {
      return [];
    }
    return x.map(fn);
  };
}

export function fmapObject<T, U>(fn: (t: T) => U): (m: ?{ [k: string]: T }) => { [k: string]: U } {
  return function(x) {
    var retval = {};
    if (!x) {
      return retval;
    }
    for (var key in x) {
      retval[key] = fn(x[key]);
    }
    return retval;
  };
}

export function bytesUnmarshal(x: ?string): string {
  if (!x) {
    return "";
  }
  return atob(x);
}

