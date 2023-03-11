import type { SinriseSunsetData } from '../api';

export const getSunPosition = (
  props: SinriseSunsetData['results'] | undefined,
) => {
  if (!props) return -37;

  const sunrise = new Date(props.sunrise).getTime();

  const dayLengthInMs =
    (new Date(props.sunset).getTime() - sunrise);

  const rotatePerMs = 74 / dayLengthInMs;

  return (
    -37 +
    (new Date().getTime() - sunrise) * rotatePerMs
  );
};
