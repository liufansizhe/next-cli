// src/auth.ts

import Github from "next-auth/providers/github";
import NextAuth from "next-auth";

console.log("lfsz-------------", process.env.AUTH_GITHUB_ID);

export const hand = NextAuth({
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
});
