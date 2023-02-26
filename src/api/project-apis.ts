import { BaseWeatherFilters, LocationsData } from './api.types';
import { BaseApiClient } from './base-api-client';

class ProjectApi extends BaseApiClient {
  getLocations = async (search: string) =>
    (await this.api
      .get(`geocode/autocomplete`, {
        prefixUrl: 'https://api.geoapify.com/v1/',
        searchParams: {
          text: search,
          apiKey: import.meta.env.VITE_GEOAPIFY_API_KEY,
        },
      })
      .json()) as LocationsData;

  getTodayForcast = async (filters: BaseWeatherFilters) =>
    await this.api
      .get('weather', {
        searchParams: {
          ...filters,
          appid: import.meta.env.VITE_OPEN_WEATHER,
        },
      })
      .json();

  get5DaysForcast = async (filters: BaseWeatherFilters) =>
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
