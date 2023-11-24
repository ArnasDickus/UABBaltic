/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddUserConfirmation(\n    $addUserConfirmationObject: [user_confirmation_insert_input!]!\n  ) {\n    insert_user_confirmation(objects: $addUserConfirmationObject) {\n      returning {\n        id\n      }\n    }\n  }\n": types.AddUserConfirmationDocument,
    "\n  query GetUserConfirmation(\n    $whereUserConfirmation: user_confirmation_bool_exp\n  ) {\n    user_confirmation(where: $whereUserConfirmation) {\n      id\n      user_confirmation_id {\n        id\n      }\n    }\n  }\n": types.GetUserConfirmationDocument,
    "\n  mutation AddUserPasswordChangeRequest(\n    $addUserPasswordChangeRequestObject: [user_password_change_request_insert_input!]!\n  ) {\n    insert_user_password_change_request(\n      objects: $addUserPasswordChangeRequestObject\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n": types.AddUserPasswordChangeRequestDocument,
    "\n  query GetUserPasswordChangeRequest(\n    $whereUserPasswordChangeRequest: user_password_change_request_bool_exp\n  ) {\n    user_password_change_request(\n      where: $whereUserPasswordChangeRequest\n      limit: 1\n    ) {\n      id\n      user {\n        id\n      }\n    }\n  }\n": types.GetUserPasswordChangeRequestDocument,
    "\n  mutation AddUser($addUserObject: [user_insert_input!]!) {\n    insert_user(objects: $addUserObject) {\n      returning {\n        id\n      }\n    }\n  }\n": types.AddUserDocument,
    "\n  mutation DeleteUser($whereDeleteUser: user_bool_exp!) {\n    delete_user(where: $whereDeleteUser) {\n      returning {\n        id\n      }\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation UpdateUsers(\n    $whereUpdateUsers: user_bool_exp!\n    $setUpdateUsers: user_set_input\n  ) {\n    update_user(where: $whereUpdateUsers, _set: $setUpdateUsers) {\n      returning {\n        id\n      }\n    }\n  }\n": types.UpdateUsersDocument,
    "\n  query GetUser($whereUser: user_bool_exp) {\n    user(where: $whereUser, limit: 1) {\n      id\n      username\n      email\n      password\n    }\n  }\n": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddUserConfirmation(\n    $addUserConfirmationObject: [user_confirmation_insert_input!]!\n  ) {\n    insert_user_confirmation(objects: $addUserConfirmationObject) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddUserConfirmation(\n    $addUserConfirmationObject: [user_confirmation_insert_input!]!\n  ) {\n    insert_user_confirmation(objects: $addUserConfirmationObject) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserConfirmation(\n    $whereUserConfirmation: user_confirmation_bool_exp\n  ) {\n    user_confirmation(where: $whereUserConfirmation) {\n      id\n      user_confirmation_id {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserConfirmation(\n    $whereUserConfirmation: user_confirmation_bool_exp\n  ) {\n    user_confirmation(where: $whereUserConfirmation) {\n      id\n      user_confirmation_id {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddUserPasswordChangeRequest(\n    $addUserPasswordChangeRequestObject: [user_password_change_request_insert_input!]!\n  ) {\n    insert_user_password_change_request(\n      objects: $addUserPasswordChangeRequestObject\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddUserPasswordChangeRequest(\n    $addUserPasswordChangeRequestObject: [user_password_change_request_insert_input!]!\n  ) {\n    insert_user_password_change_request(\n      objects: $addUserPasswordChangeRequestObject\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserPasswordChangeRequest(\n    $whereUserPasswordChangeRequest: user_password_change_request_bool_exp\n  ) {\n    user_password_change_request(\n      where: $whereUserPasswordChangeRequest\n      limit: 1\n    ) {\n      id\n      user {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserPasswordChangeRequest(\n    $whereUserPasswordChangeRequest: user_password_change_request_bool_exp\n  ) {\n    user_password_change_request(\n      where: $whereUserPasswordChangeRequest\n      limit: 1\n    ) {\n      id\n      user {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddUser($addUserObject: [user_insert_input!]!) {\n    insert_user(objects: $addUserObject) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddUser($addUserObject: [user_insert_input!]!) {\n    insert_user(objects: $addUserObject) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($whereDeleteUser: user_bool_exp!) {\n    delete_user(where: $whereDeleteUser) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($whereDeleteUser: user_bool_exp!) {\n    delete_user(where: $whereDeleteUser) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUsers(\n    $whereUpdateUsers: user_bool_exp!\n    $setUpdateUsers: user_set_input\n  ) {\n    update_user(where: $whereUpdateUsers, _set: $setUpdateUsers) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUsers(\n    $whereUpdateUsers: user_bool_exp!\n    $setUpdateUsers: user_set_input\n  ) {\n    update_user(where: $whereUpdateUsers, _set: $setUpdateUsers) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($whereUser: user_bool_exp) {\n    user(where: $whereUser, limit: 1) {\n      id\n      username\n      email\n      password\n    }\n  }\n"): (typeof documents)["\n  query GetUser($whereUser: user_bool_exp) {\n    user(where: $whereUser, limit: 1) {\n      id\n      username\n      email\n      password\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;