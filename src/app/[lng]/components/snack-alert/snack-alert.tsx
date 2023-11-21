"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { forwardRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import {
  selectToastAlert,
  showHideAlert,
} from "@/store/slices/toast-alert-slice";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackAlert = () => {
  const dispatch = useAppDispatch();
  const alertData = useAppSelector(selectToastAlert);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      showHideAlert({
        message: alertData.message,
        severity: alertData.severity,
        showAlert: false,
      })
    );
    // Cleans up Alert message without affecting MUI animation
    setTimeout(() => {
      dispatch(
        showHideAlert({
          message: "",
          severity: "info",
          showAlert: false,
        })
      );
    }, 1000);
  };

  useEffect(() => {
    return () => {
      dispatch(
        showHideAlert({
          message: "",
          severity: "info",
          showAlert: false,
        })
      );
    };
  }, [dispatch]);

  return (
    <Stack spacing={2}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alertData.showAlert}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertData.severity}>
          {alertData.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SnackAlert;
