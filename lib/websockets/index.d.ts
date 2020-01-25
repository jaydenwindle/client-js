export * from "./forex";
export * from "./stocks";
export * from "./crypto";
import { IWebsocketClient } from "./index.d";
export declare const websocketClient: (apiKey: string) => IWebsocketClient;
export default websocketClient;
