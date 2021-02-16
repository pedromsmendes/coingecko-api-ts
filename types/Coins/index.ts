import {
  CommunityDataType, DeveloperDataType, LinksType,
  MarketDataType, OrderType, PublicInterestStatsType,
  RoiType, TickersType, ImageType,
} from '../Common';

type CoinsListType = {
  include_platform?: boolean
}

type CoinsListJSONType = [{
  id: string
  symbol: string
  name: string
  platforms: {
    [key: string]: string
  }
}]

type CoinsMarketsType = {
  vs_currency: string
  ids?: Array<string>
  category?: string
  order?: OrderType
  per_page?: number
  page?: number
  sparkline?: boolean
  price_change_percentage?: Array<string>
}

type CoinsMarketsJSONType = [{
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: RoiType
  last_updated: string
}]

type CoinsIdType = {
  localization?: boolean
  tickers?: boolean
  market_data?: boolean
  community_data?: boolean
  developer_data?: boolean
  sparkline?: boolean
}

type CoinsIdJSONType = {
  id: string
  symbol: string
  name: string
  asset_platform_id: string
  block_time_in_minutes: number
  hashing_algorithm: string
  categories: Array<string>
  public_notice: string
  additional_notices: Array<string>
  localization: {
    [key: string]: string
  }
  description: {
    [key: string]: string
  }
  links: LinksType
  image: ImageType
  country_origin: string
  genesis_date: string
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  market_cap_rank: number
  coingecko_rank: number
  coingecko_score: number
  developer_score: number
  community_score: number
  liquidity_score: number
  public_interest_score: number
  market_data: MarketDataType
  community_data: CommunityDataType
  developer_data: DeveloperDataType
  public_interest_stats: PublicInterestStatsType
  status_updates: Array<string>
  last_updated: string
  tickers: Array<TickersType>
}

type CoinsTickersType = {
  exchange_ids: Array<string>
  include_exchange_logo: boolean
  page: number
  order: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc'
  depth: boolean
}

type CoinsTickersJSONType = {
  name: string
  tickers: Array<TickersType>
}

type CoinsHistoryType = {
  date: string
  localization?: boolean
}

type CoinsHistoryJSONType = {
  id: string
  symbol: string
  name: string
  image: ImageType
}

type CoinsMarketChartType = {
  vs_currency: string
  days: number
  interval?: 'daily'
}

type CoinsMarketChartJSONType = {
  prices: Array<Array<number>>
  market_caps: Array<Array<number>>
  total_volumes: Array<Array<number>>
}

type CoinsMarketChartRangeType = {
  vs_currency: string
  from: string
  to: string
}

type CoinsMarketChartRangeJSONType = {
  prices: Array<Array<number>>
  market_caps: Array<Array<number>>
  total_volumes: Array<Array<number>>
}

type CoinsStatusUpdatesType = {
  per_page?: number
  page?: number
}

type CoinsStatusUpdatesJSONType = {
  status_updates: Array<string>
}

type CoinsOhlcType = {
  vs_currency: string
  days: number
}

type CoinsOhlcJSONType = Array<Array<number>>

export {
  CoinsListType,
  CoinsListJSONType,
  CoinsMarketsType,
  CoinsMarketsJSONType,
  CoinsIdType,
  CoinsIdJSONType,
  CoinsTickersType,
  CoinsTickersJSONType,
  CoinsHistoryType,
  CoinsHistoryJSONType,
  CoinsMarketChartType,
  CoinsMarketChartJSONType,
  CoinsMarketChartRangeType,
  CoinsMarketChartRangeJSONType,
  CoinsStatusUpdatesType,
  CoinsStatusUpdatesJSONType,
  CoinsOhlcType,
  CoinsOhlcJSONType
};