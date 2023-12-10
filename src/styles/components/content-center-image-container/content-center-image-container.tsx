import { ReactNode } from "react";
import classes from "./content-center-image-container.module.css";

const ContentCenterImageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${classes.container} w-full sm:w-auto`}>{children}</div>
  );
};
export default ContentCenterImageContainer;
