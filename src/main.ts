export * from "./rest";
export * from "./websockets";

import restClient from "./rest";
import websocketClient from "./websockets";

import { IPolygonClient } from "./main.d";

export const polygonClient = (apiKey: string): IPolygonClient => ({
  rest: restClient(apiKey),
  websockets: websocketClient(apiKey)
});

export default polygonClient;
