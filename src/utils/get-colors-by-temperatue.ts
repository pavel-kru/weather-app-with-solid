export const getColorsByTemperature = (temp: number) => {
  switch (true) {
    case temp <= -10:
      return 'bg-blue-400/60 border-blue-600';

    case temp > -10 && temp <= 0:
      return 'bg-sky-200/80  border-sky-400';

    case temp > 0 && temp <= 10:
      return 'bg-lime-200 border-lime-400';

    case temp > 10 && temp <= 20:
      return 'bg-yellow-200 border-yellow-400 hue-rotate-15';

    case temp > 20 && temp <= 30:
      return 'bg-orange-300/90 border-orange-500';

    case temp > 30 && temp <= 40:
      return 'bg-orange-500/70 border-orange-500';

    default:
      return 'bg-orange-600 border-red-600';
  }
};
