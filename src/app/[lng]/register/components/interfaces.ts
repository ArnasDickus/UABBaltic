export type IPageRegisterInputs = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export interface ICheckEmailApi {
  message: string;
  response: {
    emailExist: boolean;
  };
}

export interface ICheckUsernameApi {
  message: string;
  response: {
    usernameExist: boolean;
  };
}

export interface ICheckUsernameRequest {
  email: string;
}

export interface ICreateUserResponse {
  message: string;
}
