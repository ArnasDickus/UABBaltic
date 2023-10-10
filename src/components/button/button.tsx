import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children }: IButton) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};
export default Button;
