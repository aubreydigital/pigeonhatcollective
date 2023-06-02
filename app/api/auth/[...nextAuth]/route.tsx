// import { NextAuthOptions } from 'next-auth';
// import { Session, User } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// const providerConfig: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: '',
//       clientSecret: '',
//     }),
//   ],
//   callbacks: {
//     async session({ session }: { session: Session }): Promise<Session> {
//       return session;
//     },
//     async signIn({ profile }: { profile: User }): Promise<any> {
//       // Perform any custom sign-in logic here
//       return true; // Return `true` to allow sign-in
//     },
//   },
// };

// export default providerConfig;