"use client";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import client from "../../../../../apollo-client";
import ReduxProvider from "@/app/providers/redux-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <ReduxProvider>{children}</ReduxProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};
export default Providers;
