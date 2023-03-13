import { Component, createMemo } from 'solid-js';

import type { DayType, SunriseSunset } from '../components/day-card-list/types';

// Components
import { DayCardList } from '../components';

interface TodayProps {
  forecast: DayType | undefined;
  sunriseSunset: SunriseSunset;
}

const Today: Component<TodayProps> = props => {
  const list = createMemo(() => (props.forecast ? [props.forecast] : []));

  return (
    <div class="">
      <DayCardList list={list()} sunriseSunset={props.sunriseSunset} />
    </div>
  );
};

export default Today;
