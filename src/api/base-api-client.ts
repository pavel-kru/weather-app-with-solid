// weather API: https://openweathermap.org/api
import ky from 'ky';
import { clearQueryParams, objToUrlEncoded } from '../utils';

const OPEN_WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const api = ky.create({
  prefixUrl: OPEN_WEATHER_BASE_URL,
  retry: {
    limit: 3,
    methods: ['get'],
  },
  searchParams: {
    lang: navigator.language.split('-')[0],
  },
});

export class BaseApiClient {
  protected api;

  constructor() {
    this.api = api;
  }

  protected encodeSearchParams(
    payload: Parameters<typeof clearQueryParams>[0]
  ) {
    return objToUrlEncoded(clearQueryParams({ ...payload }));
  }
}
