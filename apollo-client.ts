import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_HASURA_PROJECT_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": `${process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET}`,
  },
  cache: new InMemoryCache(),
});

export default client;
