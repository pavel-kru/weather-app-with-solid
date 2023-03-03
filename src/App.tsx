import { Component, For } from 'solid-js';
import { createResource, createSignal } from 'solid-js';
import { lazy } from 'solid-js';
import { Router, Routes, Route, A } from '@solidjs/router';

// Components
const Now = lazy(() => import('./views/Now'));
const Today = lazy(() => import('./views/Today'));
const Tomorrow = lazy(() => import('./views/Tomorrow'));
import { BaseWeatherFilters, projectApi } from './api';
import { WeatherSearch } from './components';

//https://www.solidjs.com/docs/latest/api#use___
declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      model: [() => any, (v: any) => any];
    }
  }
}

const navItems = [
  { path: '/now', title: 'Now' },
  { path: '/tomorrow', title: 'Tomorrow' },
  { path: '/', title: 'Today' },
];

const App: Component = () => {
  // Signals
  const [search, setSearch] = createSignal<string>('Minsk');
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

  return (
    <Router>
      <div class="container mx-auto p-4 min-h-screen bg-main-bg">
        <header class="text-2xl font-semibold">
          <div class="flex gap-5">
            Gismeteo Clone{''}
            <WeatherSearch
              locations={locations}
              search={search}
              onSearch={setSearch}
              setLatLong={setLatLong}
            />
          </div>
        </header>
        <main class="container mx-auto py-4">
          <nav class="mb-4">
            <For each={navItems}>
              {item => (
                <A
                  href={item.path}
                  class="mr-3 font-bold p-2 border"
                  activeClass="bg-blue-300"
                  end={item.path === '/'}
                >
                  {item.title}
                </A>
              )}
            </For>
          </nav>
          <Routes>
            <Route path="/now" component={Now} />
            <Route path="/tomorrow" component={Tomorrow} />
            <Route path="/" element={<Today forecast={todayForecast()} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
