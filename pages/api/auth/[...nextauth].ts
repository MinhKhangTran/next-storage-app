import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  session: {
    jwt: true,
  },
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGO_URI,
});
