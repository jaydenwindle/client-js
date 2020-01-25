export * from "./rest";
export * from "./websockets";

import restClient, { IRestClient } from "./rest";
import websocketClient from "./websockets";

import { IWebsocketClient } from "./websockets/index.d";

export * from "./rest/crypto";
export * from "./rest/forex";
export * from "./rest/stocks/index.d";
export * from "./rest/reference/index.d";

export { IRestClient } from "./rest";
export { IStocksClient } from "./rest/stocks/index.d";
export { IReferenceClient } from "./rest/reference/index.d";
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
