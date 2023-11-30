import React from "react";
import RegisterForm from "../../src/app/[lng]/register/components/register-form/register-form";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

describe("<RegisterForm />", () => {
  it("renders", () => {
    cy.mount(
      <Provider store={store}>
        <RegisterForm language="en" />
      </Provider>
    );
  });
});
