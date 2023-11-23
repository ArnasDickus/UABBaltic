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

// export const DELETE_USER = gql`
//   mutation deleteUser($deleteUserObject: [user_dele])
// `;

export const UPDATE_USERS = gql`
  mutation UpdateUsers(
    $whereUpdateUsers: user_bool_exp!
    $setUpdateUsers: user_set_input
  ) {
    update_user(where: $whereUpdateUsers, _set: $setUpdateUsers) {
      returning {
        id
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($whereUser: user_bool_exp) {
    user(where: $whereUser, limit: 1) {
      id
      username
      email
      password
    }
  }
`;
