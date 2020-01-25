import { IRestClient } from "./rest/index.d";
import { IWebsocketClient } from "./websockets/index.d";

export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}
