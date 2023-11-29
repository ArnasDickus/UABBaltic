import React from "react";
import RegisterForm from "./register-form";
import { Provider } from "react-redux";
import { store } from "@/store/store";

describe("<RegisterForm />", () => {
  it("renders", () => {
    cy.mount(
      <Provider store={store}>
        <RegisterForm language="en" />
      </Provider>
    );
  });
});
