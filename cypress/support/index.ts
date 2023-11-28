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
      deleteDatabaseUser(email: string): Chainable<{ email: string }>;
      //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
      //   dismiss(
      //     subject: string,
      //     options?: Partial<TypeOptions>
      //   ): Chainable<Element>;
      //   visit(
      //     originalFn: CommandOriginalFn,
      //     url: string,
      //     options: Partial<VisitOptions>
      //   ): Chainable<Element>;
    }
  }
}
