import type { Component } from 'solid-js';

import type { DayType } from './types';

interface DetailedDayCardProps {
  day: DayType;
}

const DetailedDayCard: Component<DetailedDayCardProps> = props => {
  return <div class="flex-auto h-52 bg-day-card-bg rounded-xl p-4"></div>;
};

export default DetailedDayCard;
