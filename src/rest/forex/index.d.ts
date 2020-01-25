import { ILastQuoteForCurrencyPair } from "./lastQuoteForCurrencyPair";
import {
  IHistoricForexTicksQuery,
  IHistoricForexTicksFormatted
} from "./historicForexTicks";
import {
  IRealTimeConversionQuery,
  IRealTimeConversion
} from "./realTimeCurrencyConversion";
import { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";

export interface IForexClient {
  lastQuoteForCurrencyPair: (
    from: string,
    to: string
  ) => Promise<ILastQuoteForCurrencyPair>;
  historicTicks: (
    from: string,
    to: string,
    date: string,
    query: IHistoricForexTicksQuery
  ) => Promise<IHistoricForexTicksFormatted>;
  realTimeCurrencyConversion: (
    from: string,
    to: string,
    query: IRealTimeConversionQuery
  ) => Promise<IRealTimeConversion>;
  previousClose: (
    ticker: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
}
