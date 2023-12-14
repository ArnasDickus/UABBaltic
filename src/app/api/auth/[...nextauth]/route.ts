import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import client from "../../../../../apollo-client";
import { GET_USER } from "@/store/modules/user/query";

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
          .then((val) => val.data.user[0]);
        console.log("user", user);
        const comparePasswords = await compare(
          credentials?.password || "",
          user.password
        );

        // return {
        //   id: user.id,
        //   email: user.email,
        //   name: user.username,
        // };

        if (comparePasswords) {
          return {
            id: user.id,
            email: user.email,
            name: user.username,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
