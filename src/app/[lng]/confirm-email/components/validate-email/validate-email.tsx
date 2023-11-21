"use client";
import { useTranslation } from "@/app/i18n/client";
import { IPageParamProps } from "@/constants/interfaces";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ValidateEmail = ({ params, searchParams }: IPageParamProps) => {
  const { t } = useTranslation({ language: params.lng, ns: "translation" });
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const validateEmail = async () => {
      const isEmailValid = await fetch(apiRoutes["confirm-email"], {
        method: "POST",
        body: JSON.stringify({ token: searchParams.token }),
      });

      if (isEmailValid.status === StatusCodes.okStatus) {
        dispatch(
          showHideAlert({
            message: t("confirmEmail"),
            severity: "success",
            showAlert: true,
          })
        );
      } else if (isEmailValid.status === StatusCodes.internalServerError) {
        dispatch(
          showHideAlert({
            message: t("confirmEmailFail"),
            severity: "error",
            showAlert: true,
          })
        );
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
  }, [dispatch, params.lng, router, searchParams.token, t]);

  return <></>;
};
export default ValidateEmail;
