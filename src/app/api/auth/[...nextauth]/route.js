import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/src/app/(public)/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      console.log("token xa?", token)
      console.log("account xa?", account)
      console.log("userr xa?", user)

      if (account) {
        token.accessToken = account.access_token
      }
    },
    async session({ session, token }) {
      console.log("token xa session ma?", token)

      session.accessToken = token.access_token
      return session
    },
  },
})

export { handler as GET, handler as POST }
