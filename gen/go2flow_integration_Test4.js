/* @flow */

import * as go2flow from "./go2flow";

import * as anonymous_T0 from "./anonymous_T0";
import * as anonymous_T1 from "./anonymous_T1";
import * as anonymous_T2 from "./anonymous_T2";
import * as anonymous_T3 from "./anonymous_T3";
import * as anonymous_T4 from "./anonymous_T4";

export type T = { aStringObject: anonymous_T0.T; aIntObject: anonymous_T1.T; aFloatObject: anonymous_T2.T; aBoolObject: anonymous_T3.T; aByteObject: anonymous_T4.T; };
export function empty(): T { return { aStringObject: anonymous_T0.empty(), aIntObject: anonymous_T1.empty(), aFloatObject: anonymous_T2.empty(), aBoolObject: anonymous_T3.empty(), aByteObject: anonymous_T4.empty() }; }
export type MarshalT = { aStringObject: anonymous_T0.MarshalT; aIntObject: anonymous_T1.MarshalT; aFloatObject: anonymous_T2.MarshalT; aBoolObject: anonymous_T3.MarshalT; aByteObject: anonymous_T4.MarshalT; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringObject: anonymous_T0.marshal(x.aStringObject), aIntObject: anonymous_T1.marshal(x.aIntObject), aFloatObject: anonymous_T2.marshal(x.aFloatObject), aBoolObject: anonymous_T3.marshal(x.aBoolObject), aByteObject: anonymous_T4.marshal(x.aByteObject) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringObject: anonymous_T0.unmarshal(x.aStringObject), aIntObject: anonymous_T1.unmarshal(x.aIntObject), aFloatObject: anonymous_T2.unmarshal(x.aFloatObject), aBoolObject: anonymous_T3.unmarshal(x.aBoolObject), aByteObject: anonymous_T4.unmarshal(x.aByteObject) }; })(x); }
