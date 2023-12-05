import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import client from "../../../../../apollo-client";
import { GET_USER } from "@/store/modules/user/query";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: "dd",
      clientSecret: "dsd",
    }),
    GoogleProvider({
      clientId: "dd",
      clientSecret: "sdsd",
    }),
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
          .then((val) => val.data.user[0]);

        const comparePasswords = await compare(
          credentials?.password || "",
          user.password
        );

        if (comparePasswords) {
          return {
            id: user.id,
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
