import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { getEnv } from "@/utils";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: getEnv("GOOGLE_CLIENT_ID"),
      clientSecret: getEnv("GOOGLE_CLIENT_SECRET")
    }),
    GitHubProvider({
      clientId: getEnv("GITHUB_CLIENT_ID"),
      clientSecret: getEnv("GITHUB_SECRET_ID")
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 86400
  },
  secret: getEnv("NEXTAUTH_SECRET")
  
};

export { nextAuthOptions }