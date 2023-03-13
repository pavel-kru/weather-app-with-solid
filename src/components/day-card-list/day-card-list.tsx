import {
  Component,
  createSignal,
  Show,
} from 'solid-js';
import { For } from 'solid-js';

import type { DayType, SunriseSunset } from './types';

// Components
import DayCard from './day-card';
import DetailedDayCard from './detailed-day-card';

interface DayCardListProps {
  list: DayType[];
  sunriseSunset: SunriseSunset;
}

const DayCardList: Component<DayCardListProps> = props => {
  const [selectedCard, setSelectedCard] = createSignal<DayType | null>(null, {
    equals: false,
  });

  // const isClicked = createSelector(selectedCard);

  return (
    <>
      <div class="flex gap-4 mb-2">
        <For each={props.list}>
          {(day, i) => {
            if (i() === 0) setSelectedCard(null);

            return (
              <DayCard
                day={day}
                onCardClick={card => {
                  if (!selectedCard()) {
                    setSelectedCard(card);
                  } else {
                    setSelectedCard(null);
                  }
                }}
                isClicked={!!selectedCard()}
                // isClicked={isClicked(day)}
              />
            );
          }}
        </For>
      </div>

      <Show when={selectedCard()} keyed>
        {card => (
          <DetailedDayCard day={card} sunriseSunset={props.sunriseSunset} />
        )}
      </Show>
    </>
  );
};

export default DayCardList;
