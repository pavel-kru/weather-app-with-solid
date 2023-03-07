import { DayType } from '../components/day-card-list/types';
import { BaseWeatherFilters, LocationsData } from './api.types';
import { BaseApiClient } from './base-api-client';

class ProjectApi extends BaseApiClient {
  getLocations = async (search: string): Promise<LocationsData> =>
    await this.api
      .get(`geocode/autocomplete`, {
        prefixUrl: 'https://api.geoapify.com/v1/',
        searchParams: {
          text: search,
          apiKey: import.meta.env.VITE_GEOAPIFY_API_KEY,
        },
      })
      .json();

  getTodayForecast = async (filters: BaseWeatherFilters): Promise<DayType> =>
    await this.api
      .get('weather', {
        searchParams: {
          ...filters,
          units: 'metric',
          appid: import.meta.env.VITE_OPEN_WEATHER,
        },
      })
      .json();

  get5DaysForecast = async (filters: BaseWeatherFilters) =>
    await this.api
      .get('forecast', {
        prefixUrl: 'https://api.openweathermap.org/data/2.5/',
        searchParams: {
          ...filters,
          appid: import.meta.env.VITE_OPEN_WEATHER,
        },
      })
      .json();
}

export const projectApi = new ProjectApi();
