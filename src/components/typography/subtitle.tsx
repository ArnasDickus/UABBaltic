import { ReactNode } from "react";

interface ISubtitle {
  children: ReactNode;
}

const Subtitle = ({ children }: ISubtitle) => {
  return (
    <p className="text-lg text-gray-500 lg:text-xl  dark:text-gray-400">
      {children}
    </p>
  );
};
export default Subtitle;
