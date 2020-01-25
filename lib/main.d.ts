export * from "./rest";
export * from "./websockets";
import { IPolygonClient } from "./main.d";
export declare const polygonClient: (apiKey: string) => IPolygonClient;
export default polygonClient;
