import Loader from "@/styles/icons/loader";
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
      className={`
        ${
          buttonProps?.disabled
            ? `opacity-50 cursor-not-allowed`
            : `opacity-100 cursor-pointer`
        }
       bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      {...buttonProps}>
      <div className="flex items-center gap-1">
        {children}
        {buttonProps?.disabled && (
          <Loader width={20} height={20} className="animate-spin" />
        )}
      </div>
    </button>
  );
};
export default Button;
