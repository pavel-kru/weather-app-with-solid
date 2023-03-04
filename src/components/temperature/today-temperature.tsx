import type { Component } from 'solid-js';
import { flex, mainTempText } from '../../helpers';
import { getColorsByTemperature } from '../../utils';
import type { Main } from '../day-card-list/types';

interface Props {
  temperature: Main;
}

export const TodayTemperatureBox: Component<Props> = props => {
  return (
    <div class={`rounded overflow-hidden drop-shadow-sm`}>
      <div
        class={`${flex}  ${getColorsByTemperature(
          props.temperature.temp,
        )} w-[118px] h-[25px] border-b ${mainTempText}`}
      >
        {props.temperature.temp.toFixed(0) === '-0'
          ? '0'
          : props.temperature.temp > 0
          ? `+${props.temperature.temp.toFixed(0)}`
          : props.temperature.temp.toFixed(0)}
      </div>
      <div
        class={`${flex} ${getColorsByTemperature(
          props.temperature.feels_like,
        )} w-[118px] h-[19px] text-xs font-normal`}
      >
        Feels like{' '}
        {props.temperature.feels_like.toFixed(0) === '-0'
          ? '0'
          : props.temperature.feels_like > 0
          ? `+${props.temperature.feels_like.toFixed(0)}`
          : props.temperature.feels_like.toFixed(0)}
      </div>
    </div>
  );
};
