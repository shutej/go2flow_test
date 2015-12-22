/* @flow */

import * as go2flow from "./go2flow";

import * as time_Time from "./time_Time";

export type T = { x: time_Time.T; };
export function empty(): T { return { x: time_Time.empty() }; }
export type MarshalT = { X: time_Time.MarshalT; };
export function marshal(x: T): MarshalT { return (function(x) { return { X: time_Time.marshal(x.x) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { x: time_Time.unmarshal(x.X) }; })(x); }
