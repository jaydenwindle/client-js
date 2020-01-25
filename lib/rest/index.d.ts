export * from "./crypto";
export * from "./forex";
export * from "./stocks";
export * from "./reference";
import { IRestClient } from "./index.d";
export declare const restClient: (apiKey: any) => IRestClient;
export default restClient;
