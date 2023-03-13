import type { Component, Resource } from 'solid-js';
import { flex, mainTempText } from '../../helpers';
import { getColorsByTemperature } from '../../utils';
import type { DayType } from '../day-card-list/types';

interface Props {
  temperature: Resource<DayType>;
}

export const TemperatureBox: Component<Props> = props => {
  return (
    <div
      class={`drop-shadow-md w-[59px] h-[27px] ${flex} ${mainTempText} border-b-2 ${getColorsByTemperature(
        props.temperature()?.main.temp || 0,
      )} `}
    >
      {(props.temperature()?.main.temp || 0).toFixed(0) === '-0'
        ? '0'
        : (props.temperature()?.main.temp || 0) > 0
        ? `+${(props.temperature()?.main.temp || 0).toFixed(0)}`
        : (props.temperature()?.main.temp || 0).toFixed(0)}
    </div>
  );
};
