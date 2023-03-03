import type { Component } from "solid-js";
import { For } from "solid-js";

// Components
import DayCard from "./DayCard";

const mockList = [
  { title: "Now", time: "12", icon: "sun" },
  { title: "Today", time: "4", icon: "wind" },
  { title: "Tomorrow", time: "9", icon: "rain" },
];

const DayCardList: Component = () => {
  return (
    <div class="flex gap-4">
      <For each={mockList}>{(day, i) => <DayCard day={day} />}</For>
    </div>
  );
};

export default DayCardList;
