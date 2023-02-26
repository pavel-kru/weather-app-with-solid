import { Component, For, Show } from 'solid-js';
import { createResource, createSignal } from 'solid-js';
import { lazy } from 'solid-js';
import { Router, Routes, Route, A } from '@solidjs/router';


// Components
const Now = lazy(() => import('./views/Now'));
const Today = lazy(() => import('./views/Today'));
const Tomorrow = lazy(() => import('./views/Tomorrow'));
import { BaseWeatherFilters, projectApi } from './api';
import { WeatherSearch } from './components';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      model: [() => any, (v: any) => any];
    }
  }
}



const App: Component = () => {
  const [search, setSearch] = createSignal<string>('Minsk');
  const [latLong, setLatLong] = createSignal<BaseWeatherFilters>();

  const setInitalPosition: PositionCallback = ({ coords }) => {
    setLatLong({ lat: coords.latitude, lon: coords.longitude });
  };

  navigator.geolocation.getCurrentPosition(setInitalPosition);

  const [show, setShow] = createSignal(false);

  const [locations] = createResource(search, projectApi.getLocations);

  const [forcast] = createResource(latLong, projectApi.get16DaysForcast);

  forcast();

  return (
    <Router>
      <div class="container mx-auto p-4 min-h-screen bg-main-bg">
        <header class="text-2xl font-semibold">
          <div class="flex gap-5">
            Gismeteo Clone{''}
            <WeatherSearch
              locations={locations}
              search={search}
              setSearch={setSearch}
              setLatLong={setLatLong}
              setShow={setShow}
              show={show}
            />
          </div>
        </header>
        <main class="container mx-auto py-4">
          <nav>
            <A href="/now">Now</A>
            <A href="/tomorrow">Tomorrow</A>
            <A href="/">Today</A>
          </nav>
          <Routes>
            <Route path="/now" component={Now} />
            <Route path="/tomorrow" component={Tomorrow} />
            <Route path="/" component={Today} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
