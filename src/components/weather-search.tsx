import { Component, createSignal, Resource } from 'solid-js';
import { Show, For } from 'solid-js';
import type { BaseWeatherFilters, LocationsData } from '../api';
import click from '../utils/click-outside';

// https://github.com/solidjs/solid/discussions/845
const clickOutside = click;

interface WeatherSearchProps {
  search: () => string;
  onSearch: (search: string) => void;
  locations: Resource<LocationsData>;
  setLatLong: (coords: BaseWeatherFilters) => void;
}

export const WeatherSearch: Component<WeatherSearchProps> = ({
  search,
  onSearch,
  locations,
  setLatLong,
}) => {
  const [show, setShow] = createSignal(false);

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
          onSearch(e.currentTarget.value);
        }}
        type="text"
        class={`bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          show() ? 'w-64' : 'w-44'
        } transition-all duration-100`}
        placeholder="Location"
        value={search()}
        data-dropdown-toggle="dropdown"
      />
      <Show fallback={<div />} when={show()}>
        <div
          id="dropdown"
          class={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow h-56 overflow-y-scroll scrollbar-hide::-webkit-scrollbar scrollbar-hide ${
            show() ? 'w-64' : 'w-44'
          } dark:bg-gray-700 absolute transition-all duration-100`}
        >
          <ul
            class="p-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col gap-2"
            aria-labelledby="dropdownInput"
          >
            <For each={locations()?.features} fallback={<div>No Options</div>}>
              {item => (
                <li
                  class="cursor-pointer hover:bg-slate-200 px-2 rounded-md"
                  onClick={() => {
                    onSearch(item.properties.formatted);
                    setShow(false);
                    setLatLong({
                      lat: item.properties.lat,
                      lon: item.properties.lon,
                    });
                  }}
                >
                  {item.properties.formatted}
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </div>
  );
};
