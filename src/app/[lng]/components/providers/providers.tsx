"use client";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import client from "../../../../../apollo-client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import SnackAlert from "../snack-alert/snack-alert";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <SnackAlert />
          {children}
        </ReduxProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};
export default Providers;
