import type { Component } from 'solid-js';
import { getColorsByTemperature } from '../utils';

interface Props {
  temperature: number;
}

export const TemperatureBox: Component<Props> = props => {
  return (
    <div
      class={`drop-shadow-md w-[59px] flex justify-center items-center font-normal text-base border-b-2 ${getColorsByTemperature(
        props.temperature,
      )} `}
    >
      {props.temperature.toFixed(0) === '-0'
        ? '0'
        : props.temperature > 0
        ? `+${props.temperature.toFixed(0)}`
        : props.temperature.toFixed(0)}
    </div>
  );
};
