import RegisterForm, { handleErrors } from "./register-form";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { registerValidationSchema } from "@/app/utils/validation-schemas";

describe("Register", () => {
  it("Render registration form", async () => {
    render(
      <Provider store={store}>
        <RegisterForm language="en" />
      </Provider>
    );
  });
  it("should validate required fields", () => {
    const validData = {
      name: "John",
      email: "john@example.com",
      username: "john_doe",
      password: "Password123",
    };
    const invalidData = {
      name: "",
      email: "",
      username: "",
      password: "",
    };

    const registerValidationSchemaData = registerValidationSchema();

    expect(registerValidationSchemaData.isValidSync(validData)).toBe(true);
    expect(registerValidationSchemaData.isValidSync(invalidData)).toBe(false);
  });
  it("Throws invalid error", async () => {
    const mockDispatch = jest.fn();

    expect(() =>
      handleErrors({
        dispatch: mockDispatch,
        message: "Unknown",
        status: 0,
        t: (key) => {
          return `translated string ${key}`;
        },
      })
    ).toThrow("Internal Error");
  });
});
