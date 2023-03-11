import type { SinriseSunsetData } from '../api';

export const getSunPosition = (
  props: SinriseSunsetData['results'] | undefined,
) => {
  if (!props) return -37;

  const sunrise = new Date(props.sunrise).getTime();

  const dayLengthInMins =
    (new Date(props.sunset).getTime() - sunrise) / 1000 / 60;

  const rotatePerMin = 74 / dayLengthInMins;

  return -37 + ((new Date().getTime() - sunrise) / 1000 / 60) * rotatePerMin;
};
