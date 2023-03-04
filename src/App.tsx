import { Component, createEffect, For } from 'solid-js';
import { createResource, createSignal } from 'solid-js';
import { lazy } from 'solid-js';
import { Router, Routes, Route, A } from '@solidjs/router';

// Components
const Now = lazy(() => import('./views/Now'));
const Today = lazy(() => import('./views/Today'));
const Tomorrow = lazy(() => import('./views/Tomorrow'));
import { BaseWeatherFilters, projectApi } from './api';
import { WeatherSearch } from './components';
import { useApp } from './hooks';
import { TemperatureBox } from './components/temperature-box';

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
  const {
    search,
    setSearch,
    setLatLong,
    locations,
    todayForecast,
    fiveDaysForecast,
  } = useApp();

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
            <TemperatureBox
              temperature={
                todayForecast()?.main.temp
                  ? todayForecast()?.main.temp
                  : 0
              }
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
