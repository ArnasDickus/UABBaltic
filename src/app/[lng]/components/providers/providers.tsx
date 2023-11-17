"use client";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import client from "../../../../../apollo-client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import AuthGuard from "../auth-guard/auth-guard";

const Providers = ({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <AuthGuard language={language}>{children}</AuthGuard>
        </ReduxProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};
export default Providers;
