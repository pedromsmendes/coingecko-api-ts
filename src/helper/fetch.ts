import nodeFetch, { RequestInfo } from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetch = async ({ url, method = 'GET' }: FetchType): Promise<any> => (
  nodeFetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
);

export default fetch;

interface FetchType {
  url: RequestInfo;
  method?: string | undefined;
}