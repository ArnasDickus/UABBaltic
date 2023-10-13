import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({ onClick, children, buttonProps }: IButton) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...buttonProps}>
      {children}
    </button>
  );
};
export default Button;
