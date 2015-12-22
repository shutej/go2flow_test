/* @flow */

import * as go2flow from "./go2flow";

export type T = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; aByteMap: { [k: string]: number }; };
export function empty(): T { return { aStringMap: {}, aIntMap: {}, aFloatMap: {}, aBoolMap: {}, aByteMap: {} }; }
export type MarshalT = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; aByteMap: { [k: string]: number }; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap) }; })(x); }
