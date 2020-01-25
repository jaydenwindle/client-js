import { ICryptoClient } from "./crypto/index.d";
import { IForexClient } from "./forex/index.d";
import { IStocksClient } from "./stocks/index.d";
import { IReferenceClient } from "./reference/index.d";

export interface IRestClient {
  crypto: ICryptoClient;
  forex: IForexClient;
  stocks: IStocksClient;
  reference: IReferenceClient;
}
