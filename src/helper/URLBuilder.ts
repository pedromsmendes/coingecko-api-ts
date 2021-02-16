const URLBuilder = (options?: URLOptions): string => {
  if (!options) {
    return '';
  }

  const optionsArr = [];
  Object.keys(options).forEach((key) => {
    const option = options[key];
    if (Array.isArray(option) && option.length) {
      optionsArr.push(`${key}=${option.map((item) => encodeURIComponent(item)).join(',')}`);
    } else {
      optionsArr.push(`${key}=${encodeURIComponent(option)}`);
    }
  });

  const ret = optionsArr.length ? `?${optionsArr.join('&')}` : '';

  return ret;
};

type URLOptions = {
  ids?: Array<string>
  vs_currencies?: Array<string>
  order?: 'gecko_desc' | 'gecko_asc' | 'market_cap_asc' | 'market_cap_desc'
  | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc'
  | 'trust_score_desc' | 'trust_score_asc' | 'name_asc' | 'name_desc'
  | 'open_interest_btc_asc' | 'open_interest_btc_desc' | 'trade_volume_24h_btc_asc' | 'trade_volume_24h_btc_desc'
  price_change_percentage?: Array<string>
  vs_currency?: string
  per_page?: number
  page?: number
  include_market_cap?: boolean
  include_24hr_vol?: boolean
  include_24hr_change?: boolean
  include_last_updated_at?: boolean
  localization?: boolean
  tickers?: boolean
  market_data?: boolean
  community_data?: boolean
  developer_data?: boolean
  sparkline?: boolean
  include_exchange_logo?: boolean
  include_platform?: boolean
  contract_address?: string
  include_24h_vol?: boolean
  include_24h_change?: boolean
  coin_ids?: string
  include_tickers?: string
  depth?: boolean
  days?: number
  exchange_ids?: Array<string>
  interval?: 'daily'
};

export default URLBuilder;