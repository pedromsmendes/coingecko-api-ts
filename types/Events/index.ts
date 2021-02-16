type EventsAllType = {
  country_code?: string
  type?: string
  page?: number
  upcoming_events_only?: boolean
  from_date?: string
  to_date?: string
}

type EventsAllJSONType = {
  data: Array<{
    type: string
    title: string
    description: string
    organizer: string
    start_date: string
    end_date: string
    website: string
    email: string
    venue: string
    address: string
    city: string
    country: string
    screenshot: string
  }>
  count: number
  page: number
}

type EventsCountriesJSONType = {
  data: Array<{
    country: string
    code: string
    count: number
  }>
}

type EventsTypesJSONType = {
  data: Array<string>
  count: number
}

export {
  EventsAllType,
  EventsAllJSONType,
  EventsCountriesJSONType,
  EventsTypesJSONType,
};