import { DayType } from '../components/day-card-list/types';
import { BaseWeatherFilters, LocationsData, SinriseSunsetData } from './api.types';
import { BaseApiClient } from './base-api-client';

class ProjectApi extends BaseApiClient {
  getLocations = async (search: string) =>
    await this.api
      .get(`geocode/autocomplete`, {
        prefixUrl: 'https://api.geoapify.com/v1/',
        searchParams: {
          text: search,
          apiKey: import.meta.env.VITE_GEOAPIFY_API_KEY,
        },
      })
      .json<LocationsData>();

  getTodayForecast = async (filters: BaseWeatherFilters) =>
    await this.api
      .get('weather', {
        searchParams: {
          ...filters,
          units: 'metric',
          appid: import.meta.env.VITE_OPEN_WEATHER,
        },
      })
      .json<DayType>();

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

  getSunriseSunset = async (filters: BaseWeatherFilters) => {
    const data = await this.api
      .get('json', {
        prefixUrl: 'https://api.sunrise-sunset.org',
        searchParams: {
          formatted: 0,
          ...filters,
        },
      })
      .json<SinriseSunsetData>();

    return data.results;
  };
}

export const projectApi = new ProjectApi();
