import { StatusUpdates, TickersType } from "../Common";

type ExchangesAllType = {
  per_page?: number
  page?: number
}

type ExchangesAllJSONType = {
  id: string
  name: string
  year_established: number
  country: string
  description: string
  url: string
  image: string
  has_trading_incentive: boolean
  trust_score: number
  trust_score_rank: number
  trade_volume_24h_btc: number
  trade_volume_24h_btc_normalized: number
}

type ExchangesListJSONType = {
  id: string
  name: string
}

type ExchangesIdJSONType = {
  name: string
  year_established: number
  country: string
  description: string
  url: string
  image: string
  facebook_url: string
  reddit_url: string
  telegram_url: string
  slack_url: string
  other_url_1: string
  other_url_2: string
  twitter_handle: string
  has_trading_incentive: boolean
  centralized: boolean
  public_notice: string
  alert_notice: string
  trust_score: number
  trust_score_rank: number
  trade_volume_24h_btc: number
  trade_volume_24h_btc_normalized: number
  tickers: Array<TickersType>
  status_updates: Array<StatusUpdates>
}

type ExchangesTickersType = {
  coin_ids?: string
  include_exchange_logo?: boolean
  page?: number
  depth?: boolean
  order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc'
}

type ExchangesTickersJSONType = {
  name: string
  tickers: Array<TickersType>
}

type ExchangesStatusUpdatesType = {
  per_page?: number
  page?: number
}

type ExchangesStatusUpdatesJSONType = {
  status_updates: Array<StatusUpdates>
}

type ExchangesVolumeChartType = {
  days: number
}

type ExchangesVolumeChartJSONType = Array<Array<string | number>>

export {
  ExchangesAllType,
  ExchangesAllJSONType,
  ExchangesListJSONType,
  ExchangesIdJSONType,
  ExchangesTickersType,
  ExchangesTickersJSONType,
  ExchangesStatusUpdatesType,
  ExchangesStatusUpdatesJSONType,
  ExchangesVolumeChartType,
  ExchangesVolumeChartJSONType,
};