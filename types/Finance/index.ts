type FinancePlatformsType = {
  per_page?: number
  page?: number
}

type FinancePlatformsJSONType = {
  name: string
  facts: string
  category: string
  centralized: boolean
  website_url: string
}

type FinanceProductsType = {
  per_page?: number
  page?: number
  start_at?: string
  end_at?: string
}

type FinanceProductsJSONType = {
  platform: string
  identifier: string
  supply_rate_percentage: string
  borrow_rate_percentage: string
  number_duration: string
  length_duration: string
  start_at: string
  end_at: string
  value_at: string
  redeem_at: string
}

export {
  FinancePlatformsType,
  FinancePlatformsJSONType,
  FinanceProductsType,
  FinanceProductsJSONType,
};