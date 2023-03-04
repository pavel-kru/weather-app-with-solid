import { Component, createSignal, Resource } from 'solid-js';
import { Show, For } from 'solid-js';
import type { BaseWeatherFilters, LocationsData } from '../api';
import click from '../utils/click-outside';

// https://github.com/solidjs/solid/discussions/845
const clickOutside = click;

interface WeatherSearchProps {
  search: () => string | undefined;
  onSearch: (search: string) => void;
  locations: Resource<LocationsData>;
  setLatLong: (coords: BaseWeatherFilters) => void;
}

export const WeatherSearch: Component<WeatherSearchProps> = props => {
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
          props.onSearch(e.currentTarget.value);
        }}
        type="text"
        class={`bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          show() ? 'w-64' : 'w-44'
        } transition-all duration-100`}
        placeholder="Location"
        value={props.search() || ''}
        data-dropdown-toggle="dropdown"
      />
      <Show fallback={<div />} when={show()}>
        <div
          id="dropdown"
          class={`z-1000 bg-white divide-y divide-gray-100 rounded-lg shadow h-56 overflow-y-scroll scrollbar-hide::-webkit-scrollbar scrollbar-hide ${
            show() ? 'w-64' : 'w-44'
          } dark:bg-gray-700 absolute transition-all duration-100`}
        >
          <ul
            class="p-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col"
            aria-labelledby="dropdownInput"
          >
            <For
              each={props.locations()?.features}
              fallback={<div>No Options</div>}
            >
              {item => (
                <li
                  title={item.properties.formatted}
                  class="cursor-pointer font-normal hover:bg-slate-200 p-2 rounded-md overflow-ellipsis whitespace-nowrap overflow-hidden"
                  onClick={() => {
                    props.onSearch(item.properties.formatted);
                    setShow(false);
                    props.setLatLong({
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
