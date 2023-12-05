import { ReactNode } from "react";

interface ITitle {
  children: ReactNode;
}

const Title = ({ children }: ITitle) => {
  return (
    <h2 className="mb-4 text-3xl leading-none tracking-tight text-gray-900  lg:text-3xl dark:text-white">
      {children}
    </h2>
  );
};
export default Title;
