import RegisterForm from "./register-form";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "@/store/store";
import { Provider } from "react-redux";

describe("Register", () => {
  it("Render registration form", async () => {
    render(
      <Provider store={store}>
        <RegisterForm language="en" />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("custom-element")).toBeInTheDocument();
    });
  });
});
