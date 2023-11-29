import RegisterForm from "./register-form";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { store } from "@/store/store";
import { Provider } from "react-redux";
// import { expect } from "@jest-without-globals";

describe("Register", () => {
  it("Render registration form", async () => {
    render(
      <Provider store={store}>
        <RegisterForm language="en" />
      </Provider>
    );
    // check if all components are rendered

    await waitFor(() => {
      expect(screen.getByTestId("custom-element")).toBeDefined();
    });
  });
});
