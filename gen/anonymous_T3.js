/* @flow */

import * as go2flow from "./go2flow";

export type T = { x: boolean; };
export function empty(): T { return { x: false }; }
export type MarshalT = { X: boolean; };
export function marshal(x: T): MarshalT { return (function(x) { return { X: go2flow.identity(x.x) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { x: go2flow.identity(x.X) }; })(x); }
