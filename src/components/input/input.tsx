import { HTMLProps } from "react";

interface ITailwindInput {
  name: string;
  errorText?: string;
  dataTestIdInput?: string;
  labelProps?: HTMLProps<HTMLLabelElement>;
  inputProps?: HTMLProps<HTMLInputElement>;
}

const TailwindInput = ({
  name,
  labelProps,
  inputProps,
  errorText,
  dataTestIdInput,
}: ITailwindInput) => {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
        {...labelProps}>
        {name}
      </label>
      <input
        data-testid={dataTestIdInput}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type="text"
        placeholder={name}
        {...inputProps}
      />
      <p className="text-red-500 mt-1 text-xs italic">{errorText}</p>
    </>
  );
};
export default TailwindInput;
