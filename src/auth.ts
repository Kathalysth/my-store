import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token; // Bearer token from provider
        token.orgId = account.org_id; // Custom org ID from provider
      }
      return token;
    },
    async session({ session, token }) {
      //@ts-expect-error fox orgId
      session.accessToken = token.accessToken;
      //@ts-expect-error fox orgId
      session.orgId = token.orgId;
      return session;
    },
  },
  session: { strategy: "jwt" }, // Use JWT for stateless sessions
});
