import { w3cwebsocket as Websocket } from "websocket";
export * from "./forex";
export * from "./stocks";
export * from "./crypto";
export interface IWebsocketClient {
  crypto: () => Websocket;
  forex: () => Websocket;
  stocks: () => Websocket;
}
export declare const websocketClient: (apiKey: string) => IWebsocketClient;
export default websocketClient;
