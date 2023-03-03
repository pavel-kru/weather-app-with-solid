import { Component, createMemo } from 'solid-js';

import type { DayType } from '../components/day-card-list/types';

// Components
import { DayCardList } from '../components';

interface TodayProps {
  forecast: DayType | undefined;
}

const Today: Component<TodayProps> = props => {
  const list = createMemo(() => (props.forecast ? [props.forecast] : []));

  return (
    <div class="">
      <DayCardList list={list()} />
    </div>
  );
};

export default Today;
