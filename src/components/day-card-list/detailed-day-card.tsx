import { createPolled } from '@solid-primitives/timer';
import { format } from 'date-fns';
import type { Component } from 'solid-js';
import { flex } from '../../helpers';
import { getSunPosition } from '../../utils';

import type { DayType, SunriseSunset } from './types';

interface DetailedDayCardProps {
  day: DayType;
  sunriseSunset: SunriseSunset;
}

const DetailedDayCard: Component<DetailedDayCardProps> = props => {
  const rotate = createPolled(
    () => getSunPosition(props.sunriseSunset()),
    60000,
  );

  const time = createPolled(
    () => format(new Date(), "iii',' M' 'MMM',' HH:mm"),
    1000,
  );

  return (
    <div class={`${flex}  bg-day-card-bg rounded-xl p-4`}>
      <div
        class={`flex items-center w-[100%] h-[400px] flex-col z-10 bg-day-card-bg p-4 bg-clouds bg-center bg-cover`}
      >
        <div class="text-white text-base font-semibold mb-5 ">{time()}</div>
        <div class="w-[390px] h-[250px]">
          <div class={`w-[340px] h-[70px] overflow-hidden m-auto`}>
            <div
              class={`w-[600px] h-[600px] ml-[-130px] bg-sun-path bg-[length:600px]`}
              style={{
                transform: `rotate(${rotate()}deg`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedDayCard;
