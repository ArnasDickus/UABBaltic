import { gql } from "@apollo/client";

export const ADD_USER_PASSWORD_CHANGE_REQUEST = gql`
  mutation AddUserPasswordChangeRequest(
    $addUserPasswordChangeRequestObject: [user_password_change_request_insert_input!]!
  ) {
    insert_user_password_change_request(
      objects: $addUserPasswordChangeRequestObject
    ) {
      returning {
        id
      }
    }
  }
`;

export const GET_USER_PASSWORD_CHANGE_REQUEST = gql`
  query GetUserPasswordChangeRequest(
    $whereUserPasswordChangeRequest: user_password_change_request_bool_exp
  ) {
    user_password_change_request(where: $whereUserPasswordChangeRequest) {
      id
      user {
        id
      }
    }
  }
`;
