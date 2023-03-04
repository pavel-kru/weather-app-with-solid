import { createEffect, createResource, createSignal } from 'solid-js';
import { BaseWeatherFilters, projectApi } from '../api';

export const useApp = () => {
  //Signals
  const [search, setSearch] = createSignal<string | undefined>(undefined);
  const [latLong, setLatLong] = createSignal<BaseWeatherFilters>();

  const setInitalPosition: PositionCallback = ({ coords }) => {
    setLatLong({ lat: coords.latitude, lon: coords.longitude });
  };

  navigator.geolocation.getCurrentPosition(setInitalPosition);

  // Resources
  const [locations] = createResource(search, projectApi.getLocations);
  const [todayForecast] = createResource(latLong, projectApi.getTodayForecast);
  const [fiveDaysForecast] = createResource(
    latLong,
    projectApi.get5DaysForecast,
  );

  createEffect(initial => {
    if (!initial) return false;

    const forcast = todayForecast();
    if (!forcast) return true;

    const { sys, name } = forcast;
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    setSearch(`${name}, ${regionNames.of(sys?.country)}`);

    return false;
  }, true /* initial */);

  return {
    search,
    setSearch,
    setLatLong,
    locations,
    todayForecast,
    fiveDaysForecast,
  };
};
