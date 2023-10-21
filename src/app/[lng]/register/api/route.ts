import { ADD_USER, GET_USER } from "@/app/store/modules/user/query";
import client from "../../../../../apollo-client";
import { IPageRegisterInputs } from "../components/interfaces";

export const isEmailExist = async (email: string): Promise<boolean> => {
  const isEmailExist: boolean = await client
    .query({
      query: GET_USER,
      variables: {
        whereUser: {
          email: { _eq: email },
        },
      },
    })
    .then((user) => !!user.data.user.length)
    .catch((error) => {
      console.error("isEmailExist >", error);
      return false;
    });

  return !isEmailExist;
};

export const isUsernameExist = async (username: string) => {
  const isUsernameExist: boolean = await client
    .query({
      query: GET_USER,
      variables: {
        whereUser: {
          username: { _eq: username },
        },
      },
    })
    .then((user) => !!user.data.user.length)
    .catch((error) => {
      console.error("isUsernameExist >", error);
      return false;
    });

  return isUsernameExist;
};

export const AddUser = async (formData: IPageRegisterInputs) => {
  // const bcrypt = require("bcrypt");
  // const saltRounds = 10;
  // let passwordHash = "";

  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(formData.password, salt, function (err, hash) {
  //     passwordHash = hash;
  //   });
  // });

  client
    .mutate({
      mutation: ADD_USER,
      variables: {
        addUserObject: {
          name: formData.name,
          password: formData.password,
          email: formData.email,
          username: formData.username,
        },
      },
    })
    .catch((error) => {
      console.error("ADD_USER", error);
      return;
    });
  return;
};
