import RegisterForm from "./register-form";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { registerValidationSchema } from "@/app/utils/validation-schemas";

describe("Register", () => {
  it("should validate required fields", () => {
    const validData = {
      name: "John",
      email: "john@example.com",
      username: "john_doe",
      password: "Password123",
    };
    const invalidData = {
      /* Missing required fields */
    };

    const registerValidationSchemaData = registerValidationSchema();

    expect(registerValidationSchemaData.isValidSync(validData)).toBe(true);
    // expect(validationSchema.isValidSync(invalidData)).toBe(false);
  });
  it("Render registration form", async () => {
    render(
      <Provider store={store}>
        <RegisterForm language="en" />
      </Provider>
    );
  });
  it("Throws invalid error", async () => {
    //
  });
});
