type IndexesAllType = {
  per_page?: number
  page?: number
}

type IndexesAllJSONType = {
  name: string
  id: string
  market: string
  last: string
  is_multi_asset_composite: string
}

type IndexesListJSONType = Array<{
  id: string
  name: string
}>

export {
  IndexesAllType,
  IndexesAllJSONType,
  IndexesListJSONType,
};