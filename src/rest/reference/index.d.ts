import { ILocalesResponse } from "./locales";
import { IMarketResponse } from "./markets";
import { IMarketHolyday } from "./marketHolidays";
import { IMarketStatus } from "./marketStatus";
import { IStockDividendsResults } from "./stockDividends";
import {
  IStockFinancialQuery,
  IStockFinancialResults
} from "./stockFinancials";
import { IStockSplitsResults } from "./stockSplits";
import { ITickerDetailsFormatted } from "./tickerDetails";
import { ITickerNewsQuery, ITickerNews } from "./tickerNews";
import { ITickersQuery, ITickers } from "./tickers";
import { ITickerTypes } from "./tickerTypes";

export interface IReferenceClient {
  locales: () => Promise<ILocalesResponse>;
  markets: () => Promise<IMarketResponse>;
  marketHolydays: () => Promise<IMarketHolyday[]>;
  marketStatus: () => Promise<IMarketStatus>;
  stockDividends: (symbol: string) => Promise<IStockDividendsResults>;
  stockFinancials: (
    symbol: string,
    query?: IStockFinancialQuery
  ) => Promise<IStockFinancialResults[]>;
  stockSplits: (symbol: string) => Promise<IStockSplitsResults>;
  tickerDetails: (symbol: string) => Promise<ITickerDetailsFormatted>;
  tickerNews: (
    symbol: string,
    query?: ITickerNewsQuery
  ) => Promise<ITickerNews[]>;
  tickers: (query?: ITickersQuery) => Promise<ITickers[]>;
  tickerTypes: () => Promise<ITickerTypes>;
}
