import { IPageRegisterInputs } from "../../src/app/[lng]/register/components/register-form/interfaces";

declare global {
  namespace Cypress {
    interface Chainable {
      registerUI(
        name: string,
        username: string,
        email: string,
        password: string
      ): Chainable<IPageRegisterInputs>;
      loginPR(email: string, password: string): void;
    }
  }
}
