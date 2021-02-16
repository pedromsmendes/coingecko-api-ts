import { CommunityDataType, DeveloperDataType, ImageType, LinksType, MarketDataType, PublicInterestStatsType, TickersType } from '../Common';

type ContractAddressType = {
  id: string
  contract_address: string
}

type ContractAddressJSONType = {
  id: string
  symbol: string
  name: string
  asset_platform_id: string
  block_time_in_minutes: number
  hashing_algorithm: string
  public_notice: string
  additional_notices: Array<string>
  categories: Array<string>
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
  contract_address: string
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  ico_data: {
    ico_start_date: string
    ico_end_date: string
    short_desc: string
    description: string
    links: {
      web: string
      blog: string
      slack: string
      github: string
      twitter: string
      facebook: string
      telegram: string
    },
    softcap_currency: string
    hardcap_currency: string
    total_raised_currency: string
    softcap_amount: number
    hardcap_amount: number
    total_raised: number
    quote_pre_sale_currency: string
    base_pre_sale_amount: number
    quote_pre_sale_amount: number
    quote_public_sale_currency: string
    base_public_sale_amount: number
    quote_public_sale_amount: number
    accepting_currencies: string
    country_origin: string
    pre_sale_start_date: string
    pre_sale_end_date: string
    whitelist_url: string
    whitelist_start_date: string
    whitelist_end_date: string
    bounty_detail_url: string
    amount_for_sale: number
    kyc_required: boolean
    whitelist_available: boolean
    pre_sale_available: boolean
    pre_sale_ended: boolean
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
}

type ContractMarketChartType = {
  contract_address: string
  vs_currency: string
  days: number
}

type ContractMarketChartJSONType = {
  prices: Array<Array<number>>
  market_caps: Array<Array<number>>
  total_volumes: Array<Array<number>>
}

type ContractMarketChartRangeType = {
  contract_address: string
  vs_currency: string
  from: string
  to: string
}

type ContractMarketChartRangeJSONType = {
  prices: Array<Array<number>>
  market_caps: Array<Array<number>>
  total_volumes: Array<Array<number>>
}

export {
  ContractAddressType,
  ContractAddressJSONType,
  ContractMarketChartType,
  ContractMarketChartJSONType,
  ContractMarketChartRangeType,
  ContractMarketChartRangeJSONType,
};