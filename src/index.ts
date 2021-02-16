import fetch from "./helper/fetch";
import URLBuilder from "./helper/URLBuilder";

import { StatusJSONType } from '../types/Status';
import { SimplePriceType, SimplePricesJSONType, SimpleTokenPriceType, SimpleTokenPriceJSONType } from '../types/Simple';
import { CoinsListType, CoinsListJSONType, CoinsMarketsType, CoinsMarketsJSONType, CoinsIdType, CoinsIdJSONType, CoinsTickersType, CoinsTickersJSONType, CoinsHistoryType, CoinsHistoryJSONType, CoinsMarketChartType, CoinsMarketChartJSONType, CoinsMarketChartRangeType, CoinsMarketChartRangeJSONType, CoinsStatusUpdatesType, CoinsStatusUpdatesJSONType, CoinsOhlcType, CoinsOhlcJSONType } from '../types/Coins';
import { ContractAddressType, ContractAddressJSONType, ContractMarketChartType, ContractMarketChartJSONType, ContractMarketChartRangeType, ContractMarketChartRangeJSONType } from '../types/Contract';
import { ExchangesAllType, ExchangesAllJSONType, ExchangesListJSONType, ExchangesIdJSONType, ExchangesTickersType, ExchangesTickersJSONType, ExchangesStatusUpdatesType, ExchangesStatusUpdatesJSONType, ExchangesVolumeChartType, ExchangesVolumeChartJSONType } from '../types/Exchanges';
import { FinancePlatformsType, FinancePlatformsJSONType, FinanceProductsType, FinanceProductsJSONType } from '../types/Finance';
import { IndexesAllJSONType, IndexesAllType, IndexesListJSONType } from '../types/Indexes';
import { DerivativesAllJSONType, DerivativesAllType, DerivativesExchangesIdJSONType, DerivativesExchangesIdType, DerivativesExchangesJSONType, DerivativesExchangesType, DerivativesExchangesListJSONType } from '../types/Derivatives';
import { StatusUpdatesJSONType, StatusUpdatesType } from '../types/StatusUpdates';
import { EventsAllType, EventsAllJSONType, EventsCountriesJSONType, EventsTypesJSONType } from '../types/Events';
import { ExchangeRatesJSONType } from '../types/ExchangeRates';
import { TrendingJSONType } from '../types/Trending';
import { DecentralizedFinancedDefiJSONType, GlobalAllJSONType } from '../types/Global';
class CoingeckoApi {
  static instance: CoingeckoApi;

  constructor() {
    if (!CoingeckoApi.instance) {
      CoingeckoApi.instance = this;
    }

    return CoingeckoApi.instance;
  }

  status = (): Promise<StatusJSONType> => {
    const endpoint = '/ping';
    return this.geckoRequestAsync(endpoint);
  }

  simple = () => {
    const endpoint = '/simple';

    const price = (options: SimplePriceType): Promise<SimplePricesJSONType> => {
      let finalUrl = endpoint;

      finalUrl += '/price';
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const tokenPrice = (id: string, options: SimpleTokenPriceType): Promise<SimpleTokenPriceJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/token_price/${id}`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const currencies = (): Promise<Array<string>> => {
      let finalUrl = endpoint;
      finalUrl += '/supported_vs_currencies';
      return this.geckoRequestAsync(finalUrl);
    };

    return {
      price,
      tokenPrice,
      currencies,
    };
  }

  coins = () => {
    const endpoint = '/coins';

    const list = (options?: CoinsListType): Promise<CoinsListJSONType> => {
      let finalUrl = endpoint;
      finalUrl += '/list';
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const markets = (options: CoinsMarketsType): Promise<CoinsMarketsJSONType> => {
      let finalUrl = endpoint;
      finalUrl += '/markets';
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const id = (id: string, options?: CoinsIdType): Promise<CoinsIdJSONType> => {
      let finalUrl = endpoint;
      finalUrl += `/${id}`;
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const tickers = (id: string, options: CoinsTickersType): Promise<CoinsTickersJSONType> => {
      let finalUrl = endpoint;
      finalUrl += `/${id}/tickers`;
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const history = (id: string, options: CoinsHistoryType): Promise<CoinsHistoryJSONType> => {
      let finalUrl = endpoint;
      finalUrl += `/${id}/history`;
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const marketChart = (id: string, options: CoinsMarketChartType): Promise<CoinsMarketChartJSONType> => {
      let finalUrl = endpoint;
      finalUrl += `/${id}/market_chart`;
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const marketChartRange = (id: string, options: CoinsMarketChartRangeType): Promise<CoinsMarketChartRangeJSONType> => {
      let finalUrl = endpoint;
      finalUrl += `/${id}/market_chart/range`;
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const statusUpdates = (id: string, options: CoinsStatusUpdatesType): Promise<CoinsStatusUpdatesJSONType> => {
      let finalUrl = endpoint;
      finalUrl += `/${id}/status_updates`;
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    const ohlc = (id: string, options: CoinsOhlcType): Promise<CoinsOhlcJSONType> => {
      let finalUrl = endpoint;
      finalUrl += `/${id}/ohlc`;
      finalUrl += URLBuilder(options);
      return this.geckoRequestAsync(finalUrl);
    };

    return {
      list,
      markets,
      id,
      tickers,
      history,
      marketChart,
      marketChartRange,
      statusUpdates,
      ohlc,
    };
  }

  contract = (id: string) => {
    const endpoint = `/coins/${id}/contract`;

    const address = (contractAddress: string, options: ContractAddressType): Promise<ContractAddressJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/${contractAddress}`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const marketChart = (contractAddress: string, options: ContractMarketChartType): Promise<ContractMarketChartJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/${contractAddress}/market_chart`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const marketChartRange = (contractAddress: string, options: ContractMarketChartRangeType): Promise<ContractMarketChartRangeJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/${contractAddress}/market_chart/range`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    return {
      address,
      marketChart,
      marketChartRange,
    };
  }

  exchanges = () => {
    const endpoint = '/exchanges';

    const all = (options: ExchangesAllType): Promise<ExchangesAllJSONType> => {
      let finalUrl = endpoint;

      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const list = (): Promise<ExchangesListJSONType> => {
      let finalUrl = endpoint;

      finalUrl += '/list';

      return this.geckoRequestAsync(finalUrl);
    };

    const id = (id: string): Promise<ExchangesIdJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/${id}`;

      return this.geckoRequestAsync(finalUrl);
    };

    const tickers = (id: string, options: ExchangesTickersType): Promise<ExchangesTickersJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/${id}/tickers`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const statusUpdates = (id: string, options: ExchangesStatusUpdatesType): Promise<ExchangesStatusUpdatesJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/${id}/status_updates`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const volumeChart = (id: string, options: ExchangesVolumeChartType): Promise<ExchangesVolumeChartJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/${id}/volume_chart`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    return {
      all,
      list,
      id,
      tickers,
      statusUpdates,
      volumeChart,
    };
  }

  finance = () => {
    const platforms = (options: FinancePlatformsType): Promise<FinancePlatformsJSONType> => {
      let finalUrl = '/finance_platforms';

      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const products = (options: FinanceProductsType): Promise<FinanceProductsJSONType> => {
      let finalUrl = '/finance_products';

      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    return {
      platforms,
      products,
    };
  }

  indexes = () => {
    const endpoint = '/indexes';

    const all = (options: IndexesAllType): Promise<IndexesAllJSONType> => {
      let finalUrl = endpoint;

      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const marketId = (marketId: string, id: string): Promise<any> => {
      let finalUrl = endpoint;
      finalUrl += `/${marketId}/${id}`;

      return this.geckoRequestAsync(finalUrl);
    };

    const list = (): Promise<IndexesListJSONType> => {
      let finalUrl = endpoint;
      finalUrl += '/list';

      return this.geckoRequestAsync(finalUrl);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listMarketId = (marketId: string, id: string): Promise<any> => {
      let finalUrl = endpoint;
      finalUrl += `/list_by_market_and_id/${marketId}/${id}`;

      return this.geckoRequestAsync(finalUrl);
    };

    return {
      all,
      marketId,
      list,
      listMarketId,
    };
  }

  derivatives = () => {
    const endpoint = '/derivatives';

    const all = (options?: DerivativesAllType): Promise<DerivativesAllJSONType> => {
      let finalUrl = endpoint;

      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const exchanges = (options?: DerivativesExchangesType): Promise<DerivativesExchangesJSONType> => {
      let finalUrl = endpoint;

      finalUrl += '/exchanges';
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const exchangesId = (id: string, options?: DerivativesExchangesIdType): Promise<DerivativesExchangesIdJSONType> => {
      let finalUrl = endpoint;

      finalUrl += `/exchanges/${id}`;
      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const exchangesList = (): Promise<DerivativesExchangesListJSONType> => {
      let finalUrl = endpoint;

      finalUrl += '/exchanges/list';

      return this.geckoRequestAsync(finalUrl);
    };

    return {
      all,
      exchanges,
      exchangesId,
      exchangesList,
    };
  }

  statusUpdates = (options: StatusUpdatesType): Promise<StatusUpdatesJSONType> => {
    let finalUrl = '/status_updates';

    finalUrl += URLBuilder(options);

    return this.geckoRequestAsync(finalUrl);
  }

  events = () => {
    const endpoint = '/events';

    const all = (options?: EventsAllType): Promise<EventsAllJSONType> => {
      let finalUrl = endpoint;

      finalUrl += URLBuilder(options);

      return this.geckoRequestAsync(finalUrl);
    };

    const countries = (): Promise<EventsCountriesJSONType> => {
      let finalUrl = endpoint;

      finalUrl += '/countries';

      return this.geckoRequestAsync(finalUrl);
    };

    const types = (): Promise<EventsTypesJSONType> => {
      let finalUrl = endpoint;

      finalUrl += '/types';

      return this.geckoRequestAsync(finalUrl);
    };

    return {
      all,
      countries,
      types,
    };
  }

  exchangeRates = (): Promise<ExchangeRatesJSONType> => {
    const finalUrl = '/exchange_rates';

    return this.geckoRequestAsync(finalUrl);
  }

  trending = (): Promise<TrendingJSONType> => {
    const finalUrl = '/search/trending';

    return this.geckoRequestAsync(finalUrl);
  }

  global = () => {
    const endpoint = '/global';

    const all = (): Promise<GlobalAllJSONType> => {
      const finalUrl = endpoint;

      return this.geckoRequestAsync(finalUrl);
    };

    const decentralizedFinancedDefi = (): Promise<DecentralizedFinancedDefiJSONType> => {
      let finalUrl = endpoint;

      finalUrl += '/decentralized_finance_defi';

      return this.geckoRequestAsync(finalUrl);
    };

    return {
      all,
      decentralizedFinancedDefi,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private geckoRequestAsync = (path: string): Promise<any> => {
    return fetch({ url: `https://api.coingecko.com/api/v3${path}` });
  }
}

const instance = new CoingeckoApi();
Object.freeze(instance);

export default instance;
export * from '../types';