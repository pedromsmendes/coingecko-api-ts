type OrderType =
  'gecko_desc'
  | 'gecko_asc'
  | 'market_cap_asc'
  | 'market_cap_desc'
  | 'volume_asc'
  | 'volume_desc'
  | 'id_asc'
  | 'id_desc';

type RoiType = {
  times: number
  currency: string
  percentage: number
}

type ImageType = {
  thumb: string
  small: string
  large: string
}

type LinksType = {
  homepage: Array<string>
  blockchain_site: Array<string>
  official_forum_url: Array<string>
  chat_url: Array<string>
  announcement_url: Array<string>
  twitter_screen_name: string
  facebook_username: string
  bitcointalk_thread_identifier: number
  telegram_channel_identifier: string
  subreddit_url: string
  repos_url: {
    github: Array<string>
    bitbucket: Array<string>
  }
}

type MarketDataType = {
  current_price: {
    [key: string]: number
  }
  roi: RoiType
  ath: {
    [key: string]: number
  }
  ath_change_percentage: {
    [key: string]: number
  }
  ath_date: {
    [key: string]: string
  }
  atl: {
    [key: string]: number
  }
  atl_change_percentage: {
    [key: string]: number
  }
  atl_date: {
    [key: string]: string
  }
  market_cap: {
    [key: string]: number
  }
  total_volume: {
    [key: string]: number
  }
  high_24h: {
    [key: string]: number
  }
  low_24h: {
    [key: string]: number
  }
  price_change_24h: number
  price_change_percentage_24h: number
  price_change_percentage_7d: number
  price_change_percentage_14d: number
  price_change_percentage_30d: number
  price_change_percentage_60d: number
  price_change_percentage_200d: number
  price_change_percentage_1y: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  price_change_24h_in_currency: {
    [key: string]: number
  }
  price_change_percentage_1h_in_currency: {
    [key: string]: number
  }
  price_change_percentage_24h_in_currency: {
    [key: string]: number
  }
  price_change_percentage_7d_in_currency: {
    [key: string]: number
  }
  price_change_percentage_14d_in_currency: {
    [key: string]: number
  }
  price_change_percentage_30d_in_currency: {
    [key: string]: number
  }
  price_change_percentage_60d_in_currency: {
    [key: string]: number
  }
  price_change_percentage_200d_in_currency: {
    [key: string]: number
  }
  price_change_percentage_1y_in_currency: {
    [key: string]: number
  }
  market_cap_change_24h_in_currency: {
    [key: string]: number
  }
  market_cap_change_percentage_24h_in_currency: {
    [key: string]: number
  }
  total_supply: string
  max_supply: string
  circulating_supply: number
  last_updated: string
}

type CommunityDataType = {
  facebook_likes: number
  twitter_followers: number
  reddit_average_posts_48h: number
  reddit_average_comments_48h: number
  reddit_subscribers: number
  reddit_accounts_active_48h: number
  telegram_channel_user_count: number
}

type DeveloperDataType = {
  forks: number
  stars: number
  subscribers: number
  total_issues: number
  closed_issues: number
  pull_requests_merged: number
  pull_request_contributors: number
  code_additions_deletions_4_weeks: {
    additions: number
    deletions: number
  },
  commit_count_4_weeks: number
  last_4_weeks_commit_activity_series: Array<number>
}

type PublicInterestStatsType = {
  alexa_rank: number
  bing_matches: number
}

type TickersType = {
  base: string
  target: string
  market: {
    name: string
    identifier: string
    has_trading_incentive: boolean
  }
  last: number
  volume: number
  converted_last: {
    [key: string]: number
  }
  converted_volume: {
    [key: string]: number
  }
  trust_score: string
  bid_ask_spread_percentage: number
  timestamp: string
  last_traded_at: string
  last_fetch_at: string
  is_anomaly: boolean
  is_stale: boolean
  trade_url: string
  token_info_url: string
  coin_id: string
  target_coin_id: string
}

type StatusUpdates = {
  description: string
  category: string
  created_at: string
  user: string
  user_title: string
  pin: boolean
  project: {
    type: string
    id: string
    name: string
    image: ImageType
  }
}

export {
  OrderType,
  RoiType,
  LinksType,
  MarketDataType,
  CommunityDataType,
  DeveloperDataType,
  PublicInterestStatsType,
  TickersType,
  ImageType,
  StatusUpdates,
};