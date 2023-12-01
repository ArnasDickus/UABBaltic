import { IPageRegisterInputs } from "../../src/app/[lng]/register/components/register-form/interfaces";
import "@cypress/code-coverage/support";

declare global {
  namespace Cypress {
    interface Chainable {
      registerUI(
        name: string,
        username: string,
        email: string,
        password: string
      ): Chainable<IPageRegisterInputs>;
    }
  }
}
