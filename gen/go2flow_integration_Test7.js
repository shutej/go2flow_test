/* @flow */

import * as go2flow from "./go2flow";

import * as go2flow_integration_Test1 from "./go2flow_integration_Test1";

export type T = ?go2flow_integration_Test1.T;
export function empty(): T { return null; }
export type MarshalT = ?go2flow_integration_Test1.MarshalT;
export function marshal(x: T): MarshalT { return go2flow.identity(x); }
export function unmarshal(x: MarshalT): T { return go2flow.identity(x); }
