export const getColorsByTemperature = (temp: number) => {
  let colors = '';

  switch (true) {
    case temp <= -10: {
      colors = 'bg-blue-400/80 border-blue-600';
      break;
    }
    case temp > -10 && temp <= 0: {
      colors = 'bg-sky-200 border-sky-400';
      break;
    }

    case temp > 0 && temp <= 10: {
      colors = 'bg-lime-200 border-lime-400';
      break;
    }

    case temp > 10 && temp <= 20: {
      colors = 'bg-yellow-200 border-lime-400 hue-rotate-15';
      break;
    }

    case temp > 20 && temp <= 30: {
      colors = 'bg-orange-300/90 border-orange-500';
      break;
    }

    case temp > 30 && temp <= 40: {
      colors = 'bg-orange-500/70 border-orange-500';
      break;
    }

    default: {
      colors = 'bg-orange-600 border-red-600';
    }
  }

  return colors;
};
