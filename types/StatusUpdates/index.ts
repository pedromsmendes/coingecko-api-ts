import { StatusUpdates } from '../Common';

type StatusUpdatesType = {
  category?: string
  project_type?: string
  per_page?: number
  page?: number
}

type StatusUpdatesJSONType = {
  status_updates: Array<StatusUpdates>
}

export {
  StatusUpdatesType,
  StatusUpdatesJSONType,
};