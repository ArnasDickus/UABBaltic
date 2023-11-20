import { HTMLProps } from "react";
import classes from "./weather-input.module.scss";
import SearchIcon from "@/styles/icons/search-icon";
import CloseIcon from "@/styles/icons/close-icon";

interface IWeatherInput {
  placeholder: string;
  inputProps: HTMLProps<HTMLInputElement>;
  onDelete: () => void;
}

const WeatherInput = ({ inputProps, onDelete }: IWeatherInput) => {
  return (
    <div className={classes.container}>
      <div className={classes.searchIcon}>
        <SearchIcon fill="currentColor" width={15} height={15} />
      </div>
      <div className={classes.closeIcon} onClick={() => onDelete()}>
        <CloseIcon fill="#C8CACD" width={15} height={15} />
      </div>
      <input className={classes.input} type="text" {...inputProps} />
    </div>
  );
};
export default WeatherInput;
