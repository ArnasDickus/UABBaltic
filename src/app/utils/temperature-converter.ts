export const convertKelvinToCelsius = (temperatureInKelvin: number): number => {
  if (temperatureInKelvin) {
    return Math.round(temperatureInKelvin - 273.15);
  }
  return 0;
};
