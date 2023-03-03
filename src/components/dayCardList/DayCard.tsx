import type { Component } from "solid-js";

type Day = {
  title: string;
  time: string;
  icon: string;
};

interface DayCardProps {
  day: Day;
}

const DayCard: Component<DayCardProps> = (props) => {
  console.log("DAY ", props.day);
  return (
    <div class="flex-auto h-52 bg-day-card-bg rounded-xl p-4">
      {props.day.title}
    </div>
  );
};

export default DayCard;
