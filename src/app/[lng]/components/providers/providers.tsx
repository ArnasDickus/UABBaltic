"use client";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import client from "../../../../../apollo-client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};
export default Providers;
