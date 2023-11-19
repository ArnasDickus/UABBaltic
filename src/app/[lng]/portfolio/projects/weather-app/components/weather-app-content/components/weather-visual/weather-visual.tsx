"use client";
import classes from "./weather-visual.module.scss";

interface IWeatherVisual {
  temperatureMin: number;
  temperatureMax: number;
}

const WeatherVisual = ({ temperatureMin, temperatureMax }: IWeatherVisual) => {
  // If temperature is positive.
  // Plan 2
  // If negative Convert to plan 2 and change padding.

  // Plan 1 Skirtumai
  // Turiu TemperatureMin bei TemperatureMax. 4 8
  // Is ju galiu pasiimti temperaturu skirtuma. Skirtumas 4.
  // Turedamas skirtuma 4...

  // Plan 2 height formule Success.
  // Turiu Temperature Max bei Temperature Min 4, 8
  // Turiu height formule. 1 * 5.
  // Pasinaudodamas formule 4 * 5 bei 8* 5 galiu atvaizduoti tinkamus dydzius.

  // Plan 2 improvement
  // Height has no limit Fixed
  // Negative temperature is an issue.
  // If negative it should be below 0 line with same temperature. With no subtraction etc.

  // const convertMinTemperatureIntoPx = (minTemperature: number) => {
  //   if (minTemperature * temperatureMultiplier > topHeight) {
  //     setMinVisual((prevState) => ({
  //       ...prevState,
  //       height: `${topHeight}px`,
  //     }));
  //   } else {
  //     setMinVisual((prevState) => ({
  //       ...prevState,
  //       height: `${minTemperature * temperatureMultiplier}px`,
  //     }));
  //   }
  // };

  // const convertTemperatureIntoPx = (temperature: number) => {
  //   const temperatureMultiplier = 5;
  //   const topHeight = 50;

  //   // if(temperature)

  //   // Negative temperature is still an issue
  //   const positiveTemperature = Math.abs(temperature);
  //   // console.log("temperatureFix", temperatureFix);

  //   // Height has no limit Fix
  //   if (positiveTemperature * temperatureMultiplier > topHeight) {
  //     return topHeight;
  //   }

  //   return `${positiveTemperature * temperatureMultiplier}px`;
  // };

  return (
    <div className={classes.visualContainer}>
      <div className={`${classes.column} ${classes.dayColumn}`}></div>

      <div className={`${classes.column} ${classes.nightColumn}`}></div>
    </div>
  );
};
export default WeatherVisual;
