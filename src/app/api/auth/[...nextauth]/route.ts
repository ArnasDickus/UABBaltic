import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import client from "../../../../../apollo-client";
import { GET_USER } from "@/components/store/modules/user/query";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = await client
          .query({
            query: GET_USER,
            variables: {
              whereUser: {
                email: { _eq: credentials?.email },
              },
            },
          })
          .then((val) => val.data.user);

        console.log("user[0].password", user[0].password);

        const comparePasswords = await compare(
          credentials?.password || "",
          user[0].password
        );

        if (comparePasswords) {
          return {
            id: user[0].id,
            email: user[0].email,
          };
        }
        console.log("comparePasswords", comparePasswords);
        console.log("user", user?.[0]?.password);
        // Add logic here to look up the user from the credentials supplied
        console.log("credentials", credentials);
        // const response = await
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
