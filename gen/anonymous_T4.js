/* @flow */

import * as go2flow from "./go2flow";

export type T = { x: number; };
export function empty(): T { return { x: 0 }; }
export type MarshalT = { X: number; };
export function marshal(x: T): MarshalT { return (function(x) { return { X: go2flow.identity(x.x) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { x: go2flow.identity(x.X) }; })(x); }
