import type { Component } from 'solid-js';
import type { Wind as WindType } from './day-card-list/types';
import { flex } from '../helpers';

interface WindProps {
  wind: WindType;
}

export const Wind: Component<WindProps> = props => {
  return (
    <div
      class={windFigureStyles}
      style={{
        'background-image': getWindColor(props.wind),
      }}
    >
      {props.wind.speed.toFixed(0)}
      {props.wind.gust ? ` - ${props.wind.gust?.toFixed(0)}` : ''}
    </div>
  );
};

const windFigureStyles = `w-[60px] h-[28px] -skew-x-12 font-normal text-sm ${flex} pl-2`;
const lightWind =
  'linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)';
const mediumWind =
  'linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 235, 170, 1) 30%)';

function getWindColor(wind: WindProps['wind']) {
  if (+(wind.gust || 0).toFixed(0) - +wind.speed.toFixed(0) >= 5) return mediumWind;
  return lightWind;
}
