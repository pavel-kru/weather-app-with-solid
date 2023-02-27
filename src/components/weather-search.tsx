import type { Component, Resource } from 'solid-js';
import { Show, For } from 'solid-js';
import type { BaseWeatherFilters, LocationsData } from '../api';
import click from '../utils/click-outside';

// https://github.com/solidjs/solid/discussions/845
const clickOutside = click;

interface WeatherSearchProps {
  show: () => boolean;
  setShow: (show: boolean) => void;
  search: () => string;
  setSearch: (search: string) => void;
  locations: Resource<LocationsData>;
  setLatLong: (coords: BaseWeatherFilters) => void;
}

export const WeatherSearch: Component<WeatherSearchProps> = ({
  show,
  setShow,
  search,
  setSearch,
  locations,
  setLatLong,
}) => {

  return (
    <div
      //@ts-ignore
      use:clickOutside={() => setShow(false)}
      onClick={() => setShow(true)}
      class="relative"
    >
      <input
        id="dropdownInput"
        onKeyUp={e => {
          setSearch(e.currentTarget.value);
        }}
        type="text"
        class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-44"
        placeholder="Location"
        value={search()}
        data-dropdown-toggle="dropdown"
      />
      <Show fallback={<div />} when={show()}>
        <div
          id="dropdown"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute"
        >
          <ul
            class="p-4 text-sm text-gray-700 dark:text-gray-200 flex flex-col gap-2"
            aria-labelledby="dropdownInput"
          >
            <For each={locations()?.features} fallback={<div>No Options</div>}>
              {item => (
                <li
                  class="cursor-pointer"
                  onClick={() => {
                    setSearch(item.properties.address_line1);
                    setShow(false);
                    setLatLong({
                      lat: item.properties.lat,
                      lon: item.properties.lon,
                    });
                  }}
                >
                  {item.properties.address_line1}
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </div>
  );
};
