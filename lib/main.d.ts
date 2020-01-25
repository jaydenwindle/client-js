export * from "./rest";
export * from "./websockets";
import { IRestClient } from "./rest/index.d";
import { IWebsocketClient } from "./websockets/index.d";
export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}
export declare const polygonClient: (apiKey: string) => IPolygonClient;
export default polygonClient;
