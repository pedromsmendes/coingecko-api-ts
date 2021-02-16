type DerivativesAllType = {
  include_tickers?: string
}

type DerivativesAllJSONType = Array<{
  market: string
  symbol: string
  index_id: string
  price: string
  price_percentage_change_24h: number
  contract_type: string
  index: number
  basis: number
  spread: number
  funding_rate: number
  open_interest: number
  volume_24h: number
  last_traded_at: number
  expired_at: string
}>

type DerivativesExchangesType = {
  order?: 'name_asc' | 'name_desc' | 'open_interest_btc_asc' | 'open_interest_btc_desc' | 'trade_volume_24h_btc_asc' | 'trade_volume_24h_btc_desc'
  per_page?: number
  page?: number
}

type DerivativesExchangesJSONType = Array<{
  name: string
  id: string
  open_interest_btc: number
  trade_volume_24h_btc: string
  number_of_perpetual_pairs: number
  number_of_futures_pairs: number
  image: string
  year_established: number
  country: string
  description: string
  url: string
}>

type DerivativesExchangesIdType = {
  include_tickers?: string
}

type DerivativesExchangesIdJSONType = {
  name: string
  open_interest_btc: number
  trade_volume_24h_btc: string
  number_of_perpetual_pairs: number
  number_of_futures_pairs: number
  image: string
  year_established: number
  country: string
  description: string
  url: string
}

type DerivativesExchangesListJSONType = Array<{
  id: string
  name: string
}>

export {
  DerivativesAllType,
  DerivativesAllJSONType,
  DerivativesExchangesType,
  DerivativesExchangesJSONType,
  DerivativesExchangesIdType,
  DerivativesExchangesIdJSONType,
  DerivativesExchangesListJSONType,
};