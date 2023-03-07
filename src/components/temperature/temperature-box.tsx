import type { Component } from 'solid-js';
import { flex, mainTempText } from '../../helpers';
import { getColorsByTemperature } from '../../utils';

interface Props {
  temperature: number;
}

export const TemperatureBox: Component<Props> = props => {
  return (
    <div
      class={`drop-shadow-md w-[59px] h-[27px] ${flex} ${mainTempText} border-b-2 ${getColorsByTemperature(
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
