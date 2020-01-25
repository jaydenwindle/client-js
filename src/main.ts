export * from "./rest";
export * from "./rest/crypto";
export * from "./rest/forex";
export * from "./rest/reference";
export * from "./rest/stocks";
export * from "./websockets";

import restClient, { IRestClient } from "./rest";
import websocketClient, { IWebsocketClient } from "./websockets";

export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}

export const polygonClient = (apiKey: string): IPolygonClient => ({
  rest: restClient(apiKey),
  websockets: websocketClient(apiKey)
});

export default polygonClient;
