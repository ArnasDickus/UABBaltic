import { ReactNode } from "react";

interface ISubtitle {
  children: ReactNode;
}

const Subtitle = ({ children }: ISubtitle) => {
  return (
    <p className="mb-6 text-lg text-gray-500 lg:text-xl  dark:text-gray-400">
      {children}
    </p>
  );
};
export default Subtitle;
