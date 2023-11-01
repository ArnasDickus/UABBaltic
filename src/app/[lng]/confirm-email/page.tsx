"use client";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { IPageParamProps } from "@/constants/interfaces";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ConfirmEmail = ({ params, searchParams }: IPageParamProps) => {
  const router = useRouter();
  const [alert, setAlert] = useState<ISnackAlert>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  useEffect(() => {
    const validateEmail = async () => {
      const isEmailValid = await fetch(apiRoutes["confirm-email"], {
        method: "POST",
        body: JSON.stringify({ token: searchParams.token }),
      });

      if (isEmailValid.status === StatusCodes.okStatus) {
        setAlert({
          message: "Email confirmed",
          severity: "success",
          showAlert: true,
        });
      } else if (isEmailValid.status === StatusCodes.internalServerError) {
        setAlert({
          message: "Something went wrong, please try again later",
          severity: "error",
          showAlert: true,
        });
      }
      setTimeout(() => {
        router.push(`/${params.lng}`);
      }, 5000);
    };

    if (!searchParams.token?.length) {
      router.push(`/${params.lng}`);
    } else {
      validateEmail();
    }
  }, [params.lng, router, searchParams.token]);

  return (
    <div className="pt-14">
      <SnackAlert
        {...alert}
        onClose={() => {
          setAlert((prevState) => ({
            ...prevState,
            showAlert: false,
          }));
        }}
      />
    </div>
  );
};
export default ConfirmEmail;
