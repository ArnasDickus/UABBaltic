import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($addUserObject: [user_insert_input!]!) {
    insert_user(objects: $addUserObject) {
      returning {
        id
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($whereUser: user_bool_exp) {
    user(where: $whereUser) {
      id
    }
  }
`;
