import { AlertColor } from "@mui/material";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface IToastAlert {
  message: string;
  severity: AlertColor;
  showAlert: boolean;
}

const initialState: IToastAlert = {
  message: "",
  severity: "info",
  showAlert: false,
};

const toastAlertSlice = createSlice({
  name: "toastAlert",
  initialState,
  reducers: {
    showHideAlert: (state, action: PayloadAction<IToastAlert>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.showAlert = action.payload.showAlert;
    },
  },
});

export const { showHideAlert } = toastAlertSlice.actions;

export const selectToastAlert = (state: RootState) => state.toastAlert;

export default toastAlertSlice.reducer;
