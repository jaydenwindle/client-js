import { auth } from "../transport/request";
import { cryptoDailyOpenClose } from "./dailyOpenClose";
import { cryptoExchanges, ICryptoExchanges } from "./cryptoExchanges";
import {
  lastTradeForCryptoPair,
  ILastTradeForACryptoPair
} from "./lastTradeForACryptoPair";
import {
  cryptoSnapshotAllTickers,
  cryptoSnapshotGainersLosers,
  cryptoSnapshotSingleTicker,
  cryptoSnapshotSingleTickerFullBook
} from "./snapshots";
import {
  cryptoAggregates,
  cryptoGroupedDaily,
  cryptoPreviousClose
} from "./aggregates";
import {
  historicCryptoTrades,
  IHistoricCryptoTradeQuery,
  IHistoricCryptoTradeFormatted
} from "./historicCryptoTrades";

import {
  formatICryptoTickJsonRaw,
  ICryptoDailyOpenCloseFormatted,
  ICryptoDailyOpenCloseRaw
} from "./ICryptoTickJson";

import { ICryptoClient } from "./index.d";

export const cryptoClient = (apiKey): ICryptoClient => ({
  dailyOpenClose: auth(apiKey, cryptoDailyOpenClose),
  exchanges: auth(apiKey, cryptoExchanges),
  lastTradeForPair: auth(apiKey, lastTradeForCryptoPair),
  historicTrades: auth(apiKey, historicCryptoTrades),
  // snapshots
  snapshotSingleTicker: auth(apiKey, cryptoSnapshotSingleTicker),
  snapshotAllTickers: auth(apiKey, cryptoSnapshotAllTickers),
  snapshotGainersLosers: auth(apiKey, cryptoSnapshotGainersLosers),
  snapshotSingleTickerFullBook: auth(
    apiKey,
    cryptoSnapshotSingleTickerFullBook
  ),
  // aggregates
  previousClose: auth(apiKey, cryptoPreviousClose),
  aggregates: auth(apiKey, cryptoAggregates),
  groupedDaily: auth(apiKey, cryptoGroupedDaily)
});

export default cryptoClient;
