export type IPageRegisterInputs = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export interface ICheckEmailApi {
  message: string;
  emailExist: boolean;
}

export interface ICheckUsernameApi {
  usernameExist: boolean;
  message: string;
}
