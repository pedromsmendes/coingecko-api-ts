type GlobalAllJSONType = {
  data: {
    active_cryptocurrencies: number
    upcoming_icos: number
    ongoing_icos: number
    ended_icos: number
    markets: number
    total_market_cap: {
      [key: string]: number
    }
    total_volume: {
      [key: string]: number
    }
    market_cap_percentage: {
      [key: string]: number
    }
    market_cap_change_percentage_24h_usd: number
    updated_at: number
  }
}

type DecentralizedFinancedDefiJSONType = {
  data: {
    defi_market_cap: string
    eth_market_cap: string
    defi_to_eth_ratio: string
    trading_volume_24h: string
    defi_dominance: string
    top_coin_name: string
    top_coin_defi_dominance: number
  }
}

export {
  GlobalAllJSONType,
  DecentralizedFinancedDefiJSONType,
};