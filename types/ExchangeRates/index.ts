type ExchangeRatesJSONType = {
  rates: {
    [key: string]: {
      name: string
      unit: string
      value: number
      type: string
    }
  }
}

export {
  ExchangeRatesJSONType,
};