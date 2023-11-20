import { gql } from "@apollo/client";

export const ADD_USER_CONFIRMATION = gql`
  mutation AddUserConfirmation(
    $addUserConfirmationObject: [user_confirmation_insert_input!]!
  ) {
    insert_user_confirmation(objects: $addUserConfirmationObject) {
      returning {
        id
      }
    }
  }
`;

export const GET_USER_CONFIRMATION = gql`
  query GetUserConfirmation(
    $whereUserConfirmation: user_confirmation_bool_exp
  ) {
    user_confirmation(where: $whereUserConfirmation) {
      id
      user_confirmation_id {
        id
      }
    }
  }
`;
