import { GET_USER } from "@/components/store/modules/user/query";
import client from "../../../../../apollo-client";

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
