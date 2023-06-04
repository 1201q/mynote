import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "mynote",
      type: "credentials",
      name: "Credentials",
      credentials: {
        userid: {
          label: "ID",
          type: "text",
          placeholder: "아이디를 입력해주세요",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { userid, password } = credentials;
        const QUERY = `SELECT * FROM member Where id = ? AND pw = ?`;

        try {
          const [rows] = await db.query(QUERY, [userid, password]);
          // const additionalData = await getAdditionalDataFromAPI(rows[0].uuid);
          if (rows.length > 0) {
            return {
              name: rows[0].name,
              email: rows[0].email,
              uuid: rows[0].uuid,
            };
          } else {
            return null;
          }
        } catch (error) {
          throw new Error("Internal Server Error");
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      if (session.user != null && token.hasAcceptedTerms != null) {
        session.user.hasAcceptedTerms = token?.hasAcceptedTerms;
      }
      return Promise.resolve(session);
    },
  },
});
