import {
  Component,
  createEffect,
  createSelector,
  createSignal,
  Show,
} from 'solid-js';
import { For } from 'solid-js';

import type { DayType } from './types';

// Components
import DayCard from './day-card';
import DetailedDayCard from './detailed-day-card';

interface DayCardListProps {
  list: DayType[];
}

const DayCardList: Component<DayCardListProps> = props => {
  const [selectedCardId, setSelectedCardId] = createSignal<number>();
  const [selectedCard, setSelectedCard] = createSignal<DayType | null>(null, {
    equals: false,
  });

  createEffect(() => {
    const selected = props.list.find(card => card.id === selectedCardId());
    if (selected) {
      setSelectedCard(selected);
    } else {
      setSelectedCard(null);
    }
  });

  const isClicked = createSelector(selectedCardId);

  return (
    <>
      <div class="flex gap-4 mb-2">
        <For each={props.list}>
          {(day, i) => (
            <DayCard
              day={day}
              onCardClick={dayId => {
                if (selectedCardId() !== dayId) {
                  setSelectedCardId(dayId);
                } else {
                  setSelectedCardId(undefined);
                }
              }}
              isClicked={isClicked(day.id)}
            />
          )}
        </For>
      </div>

      <Show when={selectedCard()} keyed>
        {card => <DetailedDayCard day={card} />}
      </Show>
    </>
  );
};

export default DayCardList;
