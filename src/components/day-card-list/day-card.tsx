import { Component, createMemo, createSignal, For, Show } from 'solid-js';

import format from 'date-fns/format';

import type { DayType } from './types';

type CardData = {
  date: string;
  weather: {
    [key: string]: number;
  }[];
};

interface DayCardProps {
  day: DayType;
  onCardClick: (dayId: number) => void;
  isClicked: boolean;
}

const DayCard: Component<DayCardProps> = props => {
  const [preparedData, setPreparedData] = createSignal<CardData>();

  // DOCS: https://www.solidjs.com/docs/latest/api#creatememo
  // function createMemo<T>(
  //   fn: (v: T) => T,
  //   value?: T,
  //   options?: { equals?: false | ((prev: T, next: T) => boolean) }
  // ): () => T;
  const cardData = createMemo(() => {
    const data: CardData = {
      date: '',
      weather: [],
    };

    data.date = format(props.day.dt * 1000, "iii',' PPP',' p");

    Object.entries(props.day.main).forEach(([key, value]) => {
      const formattedKey = key.split('_').join(' ');
      data.weather.push({ [formattedKey]: value });
    });

    setPreparedData(data);
  });

  cardData();

  return (
    <div
      class={
        props.isClicked
          ? `${cardStylesBasic} ${cardStylesHovered}`
          : cardStylesBasic
      }
      onClick={() => props.onCardClick(props.day.id)}
    >
      <Show when={preparedData()} keyed>
        {data => (
          <div class="relative z-10">
            <h3 class="mb-2 font-medium">{data.date}</h3>

            <div class="flex flex-col">
              <For each={data.weather} fallback={<div>Loading...</div>}>
                {item => {
                  const [key, value] = Object.entries(item)[0];
                  return (
                    <div class="capitalize">
                      <span class="italic">{key}</span>:{' '}
                      <span class="font-medium">{value}</span>
                    </div>
                  );
                }}
              </For>
            </div>
          </div>
        )}
      </Show>
    </div>
  );
};

const cardStylesBasic =
  'flex-[0_0_30%] h-auto min-h-23 bg-day-card-bg rounded-xl p-4 cursor-pointer relative';
const cardStylesHovered =
  "after:content-[''] after:block after:bg-day-card-bg after:absolute after:w-full after:h-2/4 after:top-3/4 after:left-0 z-0";

export default DayCard;
