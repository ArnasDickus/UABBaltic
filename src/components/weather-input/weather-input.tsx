import { HTMLProps } from "react";
import classes from "./weather-input.module.scss";
import SearchIcon from "@/styles/icons/search-icon";
import CloseIcon from "@/styles/icons/close-icon";

interface IWeatherInput {
  placeholder: string;
  inputProps: HTMLProps<HTMLInputElement>;
}

const WeatherInput = ({ inputProps }: IWeatherInput) => {
  return (
    <div className={classes.container}>
      <div className={classes.searchIcon}>
        <SearchIcon fill="#6F737A" width={15} height={15} />
      </div>
      <div className={classes.closeIcon}>
        <CloseIcon fill="#C8CACD" width={15} height={15} />
      </div>
      <input className={classes.input} type="text" {...inputProps} />
    </div>
  );
};
export default WeatherInput;
