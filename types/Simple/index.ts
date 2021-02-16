type SimplePriceType = {
  ids: Array<string>
  vs_currencies: Array<string>
  include_market_cap?: boolean
  include_24h_vol?: boolean
  include_24h_change?: boolean
  include_last_updated_at?: boolean
}

type SimplePricesJSONType = {
  [key: string]: {
    [key: string]: string | null
  } | null;
}

type SimpleTokenPriceType = {
  contract_addresses: Array<string>
  vs_currencies: Array<string>
  include_market_cap?: boolean
  include_24h_vol?: boolean
  include_24h_change?: boolean
  include_last_updated_at?: boolean
}

type SimpleTokenPriceJSONType = {
  [key: string]: {
    [key: string]: string | null
  } | null;
}

export {
  SimplePriceType,
  SimplePricesJSONType,
  SimpleTokenPriceType,
  SimpleTokenPriceJSONType,
};