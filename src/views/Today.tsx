import { Component, createComputed, createSignal } from 'solid-js';

import type { DayType } from '../components/day-card-list/types';

// Components
import { DayCardList } from '../components';

interface TodayProps {
  forecast: DayType | unknown;
}

const Today: Component<TodayProps> = props => {
  const [list, setList] = createSignal<any>([]);
  createComputed(() => {
    if (!props.forecast) return;
    setList([props.forecast]);
  });

  return (
    <div class="">
      <DayCardList list={list()} />
    </div>
  );
};

export default Today;
