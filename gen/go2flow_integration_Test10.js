/* @flow */

import * as go2flow from "./go2flow";

export type T = ?T;
export function empty(): T { return null; }
export type MarshalT = ?MarshalT;
export function marshal(x: T): MarshalT { return go2flow.identity(x); }
export function unmarshal(x: MarshalT): T { return go2flow.identity(x); }
