/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  name: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_confirmation" */
  delete_user_confirmation?: Maybe<User_Confirmation_Mutation_Response>;
  /** delete single row from the table: "user_confirmation" */
  delete_user_confirmation_by_pk?: Maybe<User_Confirmation>;
  /** delete data from the table: "user_password_change_request" */
  delete_user_password_change_request?: Maybe<User_Password_Change_Request_Mutation_Response>;
  /** delete single row from the table: "user_password_change_request" */
  delete_user_password_change_request_by_pk?: Maybe<User_Password_Change_Request>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_confirmation" */
  insert_user_confirmation?: Maybe<User_Confirmation_Mutation_Response>;
  /** insert a single row into the table: "user_confirmation" */
  insert_user_confirmation_one?: Maybe<User_Confirmation>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_password_change_request" */
  insert_user_password_change_request?: Maybe<User_Password_Change_Request_Mutation_Response>;
  /** insert a single row into the table: "user_password_change_request" */
  insert_user_password_change_request_one?: Maybe<User_Password_Change_Request>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_confirmation" */
  update_user_confirmation?: Maybe<User_Confirmation_Mutation_Response>;
  /** update single row of the table: "user_confirmation" */
  update_user_confirmation_by_pk?: Maybe<User_Confirmation>;
  /** update multiples rows of table: "user_confirmation" */
  update_user_confirmation_many?: Maybe<Array<Maybe<User_Confirmation_Mutation_Response>>>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_password_change_request" */
  update_user_password_change_request?: Maybe<User_Password_Change_Request_Mutation_Response>;
  /** update single row of the table: "user_password_change_request" */
  update_user_password_change_request_by_pk?: Maybe<User_Password_Change_Request>;
  /** update multiples rows of table: "user_password_change_request" */
  update_user_password_change_request_many?: Maybe<Array<Maybe<User_Password_Change_Request_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_ConfirmationArgs = {
  where: User_Confirmation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Confirmation_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Password_Change_RequestArgs = {
  where: User_Password_Change_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Password_Change_Request_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ConfirmationArgs = {
  objects: Array<User_Confirmation_Insert_Input>;
  on_conflict?: InputMaybe<User_Confirmation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Confirmation_OneArgs = {
  object: User_Confirmation_Insert_Input;
  on_conflict?: InputMaybe<User_Confirmation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Password_Change_RequestArgs = {
  objects: Array<User_Password_Change_Request_Insert_Input>;
  on_conflict?: InputMaybe<User_Password_Change_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Password_Change_Request_OneArgs = {
  object: User_Password_Change_Request_Insert_Input;
  on_conflict?: InputMaybe<User_Password_Change_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ConfirmationArgs = {
  _inc?: InputMaybe<User_Confirmation_Inc_Input>;
  _set?: InputMaybe<User_Confirmation_Set_Input>;
  where: User_Confirmation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Confirmation_By_PkArgs = {
  _inc?: InputMaybe<User_Confirmation_Inc_Input>;
  _set?: InputMaybe<User_Confirmation_Set_Input>;
  pk_columns: User_Confirmation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Confirmation_ManyArgs = {
  updates: Array<User_Confirmation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Password_Change_RequestArgs = {
  _inc?: InputMaybe<User_Password_Change_Request_Inc_Input>;
  _set?: InputMaybe<User_Password_Change_Request_Set_Input>;
  where: User_Password_Change_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Password_Change_Request_By_PkArgs = {
  _inc?: InputMaybe<User_Password_Change_Request_Inc_Input>;
  _set?: InputMaybe<User_Password_Change_Request_Set_Input>;
  pk_columns: User_Password_Change_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Password_Change_Request_ManyArgs = {
  updates: Array<User_Password_Change_Request_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']['input']>;
  _gt?: InputMaybe<Scalars['name']['input']>;
  _gte?: InputMaybe<Scalars['name']['input']>;
  _in?: InputMaybe<Array<Scalars['name']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['name']['input']>;
  _lte?: InputMaybe<Scalars['name']['input']>;
  _neq?: InputMaybe<Scalars['name']['input']>;
  _nin?: InputMaybe<Array<Scalars['name']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_confirmation" */
  user_confirmation: Array<User_Confirmation>;
  /** fetch aggregated fields from the table: "user_confirmation" */
  user_confirmation_aggregate: User_Confirmation_Aggregate;
  /** fetch data from the table: "user_confirmation" using primary key columns */
  user_confirmation_by_pk?: Maybe<User_Confirmation>;
  /** fetch data from the table: "user_password_change_request" */
  user_password_change_request: Array<User_Password_Change_Request>;
  /** fetch aggregated fields from the table: "user_password_change_request" */
  user_password_change_request_aggregate: User_Password_Change_Request_Aggregate;
  /** fetch data from the table: "user_password_change_request" using primary key columns */
  user_password_change_request_by_pk?: Maybe<User_Password_Change_Request>;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_ConfirmationArgs = {
  distinct_on?: InputMaybe<Array<User_Confirmation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Confirmation_Order_By>>;
  where?: InputMaybe<User_Confirmation_Bool_Exp>;
};


export type Query_RootUser_Confirmation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Confirmation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Confirmation_Order_By>>;
  where?: InputMaybe<User_Confirmation_Bool_Exp>;
};


export type Query_RootUser_Confirmation_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_Password_Change_RequestArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Change_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Password_Change_Request_Order_By>>;
  where?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
};


export type Query_RootUser_Password_Change_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Change_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Password_Change_Request_Order_By>>;
  where?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
};


export type Query_RootUser_Password_Change_Request_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_confirmation" */
  user_confirmation: Array<User_Confirmation>;
  /** fetch aggregated fields from the table: "user_confirmation" */
  user_confirmation_aggregate: User_Confirmation_Aggregate;
  /** fetch data from the table: "user_confirmation" using primary key columns */
  user_confirmation_by_pk?: Maybe<User_Confirmation>;
  /** fetch data from the table in a streaming manner: "user_confirmation" */
  user_confirmation_stream: Array<User_Confirmation>;
  /** fetch data from the table: "user_password_change_request" */
  user_password_change_request: Array<User_Password_Change_Request>;
  /** fetch aggregated fields from the table: "user_password_change_request" */
  user_password_change_request_aggregate: User_Password_Change_Request_Aggregate;
  /** fetch data from the table: "user_password_change_request" using primary key columns */
  user_password_change_request_by_pk?: Maybe<User_Password_Change_Request>;
  /** fetch data from the table in a streaming manner: "user_password_change_request" */
  user_password_change_request_stream: Array<User_Password_Change_Request>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_ConfirmationArgs = {
  distinct_on?: InputMaybe<Array<User_Confirmation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Confirmation_Order_By>>;
  where?: InputMaybe<User_Confirmation_Bool_Exp>;
};


export type Subscription_RootUser_Confirmation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Confirmation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Confirmation_Order_By>>;
  where?: InputMaybe<User_Confirmation_Bool_Exp>;
};


export type Subscription_RootUser_Confirmation_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Confirmation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Confirmation_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Confirmation_Bool_Exp>;
};


export type Subscription_RootUser_Password_Change_RequestArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Change_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Password_Change_Request_Order_By>>;
  where?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
};


export type Subscription_RootUser_Password_Change_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Password_Change_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Password_Change_Request_Order_By>>;
  where?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
};


export type Subscription_RootUser_Password_Change_Request_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Password_Change_Request_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Password_Change_Request_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Database with all users. */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  email_confirmed: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['name']['output'];
  password: Scalars['name']['output'];
  updated_at: Scalars['timestamptz']['output'];
  username?: Maybe<Scalars['name']['output']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_confirmed?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Name_Comparison_Exp>;
  password?: InputMaybe<Name_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<Name_Comparison_Exp>;
};

/** For confirming user email */
export type User_Confirmation = {
  __typename?: 'user_confirmation';
  created_at: Scalars['timestamptz']['output'];
  expires_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user_confirmation_id?: Maybe<User>;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "user_confirmation" */
export type User_Confirmation_Aggregate = {
  __typename?: 'user_confirmation_aggregate';
  aggregate?: Maybe<User_Confirmation_Aggregate_Fields>;
  nodes: Array<User_Confirmation>;
};

/** aggregate fields of "user_confirmation" */
export type User_Confirmation_Aggregate_Fields = {
  __typename?: 'user_confirmation_aggregate_fields';
  avg?: Maybe<User_Confirmation_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Confirmation_Max_Fields>;
  min?: Maybe<User_Confirmation_Min_Fields>;
  stddev?: Maybe<User_Confirmation_Stddev_Fields>;
  stddev_pop?: Maybe<User_Confirmation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Confirmation_Stddev_Samp_Fields>;
  sum?: Maybe<User_Confirmation_Sum_Fields>;
  var_pop?: Maybe<User_Confirmation_Var_Pop_Fields>;
  var_samp?: Maybe<User_Confirmation_Var_Samp_Fields>;
  variance?: Maybe<User_Confirmation_Variance_Fields>;
};


/** aggregate fields of "user_confirmation" */
export type User_Confirmation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Confirmation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Confirmation_Avg_Fields = {
  __typename?: 'user_confirmation_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_confirmation". All fields are combined with a logical 'AND'. */
export type User_Confirmation_Bool_Exp = {
  _and?: InputMaybe<Array<User_Confirmation_Bool_Exp>>;
  _not?: InputMaybe<User_Confirmation_Bool_Exp>;
  _or?: InputMaybe<Array<User_Confirmation_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_confirmation_id?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_confirmation" */
export enum User_Confirmation_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserConfirmationPkey = 'user_confirmation_pkey',
  /** unique or primary key constraint on columns "token" */
  UserConfirmationTokenKey = 'user_confirmation_token_key'
}

/** input type for incrementing numeric columns in table "user_confirmation" */
export type User_Confirmation_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_confirmation" */
export type User_Confirmation_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_confirmation_id?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Confirmation_Max_Fields = {
  __typename?: 'user_confirmation_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type User_Confirmation_Min_Fields = {
  __typename?: 'user_confirmation_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "user_confirmation" */
export type User_Confirmation_Mutation_Response = {
  __typename?: 'user_confirmation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Confirmation>;
};

/** on_conflict condition type for table "user_confirmation" */
export type User_Confirmation_On_Conflict = {
  constraint: User_Confirmation_Constraint;
  update_columns?: Array<User_Confirmation_Update_Column>;
  where?: InputMaybe<User_Confirmation_Bool_Exp>;
};

/** Ordering options when selecting data from "user_confirmation". */
export type User_Confirmation_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_confirmation_id?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_confirmation */
export type User_Confirmation_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "user_confirmation" */
export enum User_Confirmation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_confirmation" */
export type User_Confirmation_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Confirmation_Stddev_Fields = {
  __typename?: 'user_confirmation_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Confirmation_Stddev_Pop_Fields = {
  __typename?: 'user_confirmation_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Confirmation_Stddev_Samp_Fields = {
  __typename?: 'user_confirmation_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_confirmation" */
export type User_Confirmation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Confirmation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Confirmation_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Confirmation_Sum_Fields = {
  __typename?: 'user_confirmation_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user_confirmation" */
export enum User_Confirmation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Confirmation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Confirmation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Confirmation_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Confirmation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Confirmation_Var_Pop_Fields = {
  __typename?: 'user_confirmation_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Confirmation_Var_Samp_Fields = {
  __typename?: 'user_confirmation_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Confirmation_Variance_Fields = {
  __typename?: 'user_confirmation_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint on columns "username" */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  password?: InputMaybe<Scalars['name']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_confirmed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** Everytime user reset it's password */
export type User_Password_Change_Request = {
  __typename?: 'user_password_change_request';
  created_at: Scalars['timestamptz']['output'];
  expires_at: Scalars['date']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "user_password_change_request" */
export type User_Password_Change_Request_Aggregate = {
  __typename?: 'user_password_change_request_aggregate';
  aggregate?: Maybe<User_Password_Change_Request_Aggregate_Fields>;
  nodes: Array<User_Password_Change_Request>;
};

/** aggregate fields of "user_password_change_request" */
export type User_Password_Change_Request_Aggregate_Fields = {
  __typename?: 'user_password_change_request_aggregate_fields';
  avg?: Maybe<User_Password_Change_Request_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Password_Change_Request_Max_Fields>;
  min?: Maybe<User_Password_Change_Request_Min_Fields>;
  stddev?: Maybe<User_Password_Change_Request_Stddev_Fields>;
  stddev_pop?: Maybe<User_Password_Change_Request_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Password_Change_Request_Stddev_Samp_Fields>;
  sum?: Maybe<User_Password_Change_Request_Sum_Fields>;
  var_pop?: Maybe<User_Password_Change_Request_Var_Pop_Fields>;
  var_samp?: Maybe<User_Password_Change_Request_Var_Samp_Fields>;
  variance?: Maybe<User_Password_Change_Request_Variance_Fields>;
};


/** aggregate fields of "user_password_change_request" */
export type User_Password_Change_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Password_Change_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Password_Change_Request_Avg_Fields = {
  __typename?: 'user_password_change_request_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_password_change_request". All fields are combined with a logical 'AND'. */
export type User_Password_Change_Request_Bool_Exp = {
  _and?: InputMaybe<Array<User_Password_Change_Request_Bool_Exp>>;
  _not?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
  _or?: InputMaybe<Array<User_Password_Change_Request_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_password_change_request" */
export enum User_Password_Change_Request_Constraint {
  /** unique or primary key constraint on columns "id" */
  PasswordChangeRequestPkey = 'password_change_request_pkey'
}

/** input type for incrementing numeric columns in table "user_password_change_request" */
export type User_Password_Change_Request_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_password_change_request" */
export type User_Password_Change_Request_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Password_Change_Request_Max_Fields = {
  __typename?: 'user_password_change_request_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type User_Password_Change_Request_Min_Fields = {
  __typename?: 'user_password_change_request_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "user_password_change_request" */
export type User_Password_Change_Request_Mutation_Response = {
  __typename?: 'user_password_change_request_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Password_Change_Request>;
};

/** on_conflict condition type for table "user_password_change_request" */
export type User_Password_Change_Request_On_Conflict = {
  constraint: User_Password_Change_Request_Constraint;
  update_columns?: Array<User_Password_Change_Request_Update_Column>;
  where?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
};

/** Ordering options when selecting data from "user_password_change_request". */
export type User_Password_Change_Request_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_password_change_request */
export type User_Password_Change_Request_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "user_password_change_request" */
export enum User_Password_Change_Request_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_password_change_request" */
export type User_Password_Change_Request_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Password_Change_Request_Stddev_Fields = {
  __typename?: 'user_password_change_request_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Password_Change_Request_Stddev_Pop_Fields = {
  __typename?: 'user_password_change_request_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Password_Change_Request_Stddev_Samp_Fields = {
  __typename?: 'user_password_change_request_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_password_change_request" */
export type User_Password_Change_Request_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Password_Change_Request_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Password_Change_Request_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Password_Change_Request_Sum_Fields = {
  __typename?: 'user_password_change_request_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user_password_change_request" */
export enum User_Password_Change_Request_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Password_Change_Request_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Password_Change_Request_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Password_Change_Request_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Password_Change_Request_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Password_Change_Request_Var_Pop_Fields = {
  __typename?: 'user_password_change_request_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Password_Change_Request_Var_Samp_Fields = {
  __typename?: 'user_password_change_request_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Password_Change_Request_Variance_Fields = {
  __typename?: 'user_password_change_request_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailConfirmed = 'email_confirmed',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  password?: InputMaybe<Scalars['name']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  password?: InputMaybe<Scalars['name']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailConfirmed = 'email_confirmed',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AddUserConfirmationMutationVariables = Exact<{
  addUserConfirmationObject: Array<User_Confirmation_Insert_Input> | User_Confirmation_Insert_Input;
}>;


export type AddUserConfirmationMutation = { __typename?: 'mutation_root', insert_user_confirmation?: { __typename?: 'user_confirmation_mutation_response', returning: Array<{ __typename?: 'user_confirmation', id: number }> } | null };

export type GetUserConfirmationQueryVariables = Exact<{
  whereUserConfirmation?: InputMaybe<User_Confirmation_Bool_Exp>;
}>;


export type GetUserConfirmationQuery = { __typename?: 'query_root', user_confirmation: Array<{ __typename?: 'user_confirmation', id: number, user_confirmation_id?: { __typename?: 'user', id: number } | null }> };

export type AddUserPasswordChangeRequestMutationVariables = Exact<{
  addUserPasswordChangeRequestObject: Array<User_Password_Change_Request_Insert_Input> | User_Password_Change_Request_Insert_Input;
}>;


export type AddUserPasswordChangeRequestMutation = { __typename?: 'mutation_root', insert_user_password_change_request?: { __typename?: 'user_password_change_request_mutation_response', returning: Array<{ __typename?: 'user_password_change_request', id: number }> } | null };

export type GetUserPasswordChangeRequestQueryVariables = Exact<{
  whereUserPasswordChangeRequest?: InputMaybe<User_Password_Change_Request_Bool_Exp>;
}>;


export type GetUserPasswordChangeRequestQuery = { __typename?: 'query_root', user_password_change_request: Array<{ __typename?: 'user_password_change_request', id: number, user?: { __typename?: 'user', id: number } | null }> };

export type AddUserMutationVariables = Exact<{
  addUserObject: Array<User_Insert_Input> | User_Insert_Input;
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_user?: { __typename?: 'user_mutation_response', returning: Array<{ __typename?: 'user', id: number }> } | null };

export type UpdateUsersMutationVariables = Exact<{
  whereUpdateUsers: User_Bool_Exp;
  setUpdateUsers?: InputMaybe<User_Set_Input>;
}>;


export type UpdateUsersMutation = { __typename?: 'mutation_root', update_user?: { __typename?: 'user_mutation_response', returning: Array<{ __typename?: 'user', id: number }> } | null };

export type GetUserQueryVariables = Exact<{
  whereUser?: InputMaybe<User_Bool_Exp>;
}>;


export type GetUserQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: number, username?: any | null, email: string, password: any }> };


export const AddUserConfirmationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserConfirmation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addUserConfirmationObject"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_confirmation_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_confirmation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addUserConfirmationObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserConfirmationMutation, AddUserConfirmationMutationVariables>;
export const GetUserConfirmationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserConfirmation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereUserConfirmation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_confirmation_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_confirmation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereUserConfirmation"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_confirmation_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserConfirmationQuery, GetUserConfirmationQueryVariables>;
export const AddUserPasswordChangeRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserPasswordChangeRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addUserPasswordChangeRequestObject"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_password_change_request_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_password_change_request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addUserPasswordChangeRequestObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserPasswordChangeRequestMutation, AddUserPasswordChangeRequestMutationVariables>;
export const GetUserPasswordChangeRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserPasswordChangeRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereUserPasswordChangeRequest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_password_change_request_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_password_change_request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereUserPasswordChangeRequest"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserPasswordChangeRequestQuery, GetUserPasswordChangeRequestQueryVariables>;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addUserObject"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addUserObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const UpdateUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereUpdateUsers"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"setUpdateUsers"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereUpdateUsers"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"setUpdateUsers"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUsersMutation, UpdateUsersMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereUser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"user_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereUser"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;