type TrendingJSONType = {
  coins: Array<{
    item: {
      id: string
      name: string
      symbol: string
      market_cap_rank: number
      thumb: string
      large: string
      score: number
    }
  }>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exchanges: Array<any>
}

export {
  TrendingJSONType,
};