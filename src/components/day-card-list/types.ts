import type { Resource } from 'solid-js';
import type { SinriseSunsetData } from '../../api';

type Coord = {
  lon: number;
  lat: number;
};

type WeatherItem = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type Rain = {
  [key: string]: number;
};

type Clouds = {
  [key: string]: number;
};

export type DayType = {
  coord: Coord;
  weather: WeatherItem[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type SunriseSunset = Resource<SinriseSunsetData['results']>;
