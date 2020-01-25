import { cryptoClient, ICryptoClient } from "./crypto";
export * from "./crypto";

import { forexClient, IForexClient } from "./forex";
export * from "./forex";

import { stocksClient } from "./stocks";
export * from "./stocks";

import { referenceClient } from "./reference";
export * from "./reference";

import { IStocksClient } from "./stocks/index.d";
import { IReferenceClient } from "./reference/index.d";

export interface IRestClient {
  crypto: ICryptoClient;
  forex: IForexClient;
  stocks: IStocksClient;
  reference: IReferenceClient;
}

export const restClient = (apiKey): IRestClient => ({
  crypto: cryptoClient(apiKey),
  forex: forexClient(apiKey),
  stocks: stocksClient(apiKey),
  reference: referenceClient(apiKey)
});

export default restClient;
