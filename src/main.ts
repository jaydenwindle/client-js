export * from "./rest";
export * from "./websockets";

import restClient from "./rest";
import websocketClient from "./websockets";

import { IRestClient } from "./rest/index.d";
import { IWebsocketClient } from "./websockets/index.d";

export * from "./rest/crypto/index.d";
export * from "./rest/forex/index.d";
export * from "./rest/stocks/index.d";
export * from "./rest/reference/index.d";

export { IRestClient } from "./rest/index.d";
export { IWebsocketClient } from "./websockets/index.d";
export {
  IAggResponseFormatted,
  IAggregateQuery
} from "./rest/stocks/aggregates";

export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}

export const polygonClient = (apiKey: string): IPolygonClient => ({
  rest: restClient(apiKey),
  websockets: websocketClient(apiKey)
});

export default polygonClient;
