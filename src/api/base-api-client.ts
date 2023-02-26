// weather API: https://openweathermap.org/api
import ky from 'ky';
import { clearQueryParams, objToUrlEncoded } from '../utils';

const api = ky.create({ prefixUrl: 'https://api.openweathermap.org' });

export class BaseApiClient {
  protected api;

  constructor() {
    this.api = api;
  }

  protected encodeSearchParams(
    payload: Parameters<typeof clearQueryParams>[0]
  ) {
    return objToUrlEncoded(clearQueryParams(payload));
  }
}
