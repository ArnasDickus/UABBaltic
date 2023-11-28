import { IPageRegisterInputs } from "@/app/[lng]/register/components/interfaces";

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
