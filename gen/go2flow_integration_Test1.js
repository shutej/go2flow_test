/* @flow */

import * as go2flow from "./go2flow";

export type T = { aString: string; aInt: number; aFloat: number; aBool: boolean; aByte: number; };
export function empty(): T { return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0 }; }
export type MarshalT = { aString: string; aInt: number; aFloat: number; aBool: boolean; aByte: number; };
export function marshal(x: T): MarshalT { return (function(x) { return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) }; })(x); }
