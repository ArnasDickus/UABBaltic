import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface IWeatherSlice {
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const initialState: IWeatherSlice = {
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
};

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {
    updateCoordinates: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.coordinates = {
        ...action.payload,
      };
    },
  },
});

export const { updateCoordinates } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weatherApp;

export default weatherSlice.reducer;
