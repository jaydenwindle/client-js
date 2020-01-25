export * from "./rest";
export * from "./websockets";

import restClient from "./rest";
import websocketClient from "./websockets";

import { IRestClient } from "./rest/index.d";
import { IWebsocketClient } from "./websockets/index.d";

export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}

export const polygonClient = (apiKey: string): IPolygonClient => ({
  rest: restClient(apiKey),
  websockets: websocketClient(apiKey)
});

export default polygonClient;
