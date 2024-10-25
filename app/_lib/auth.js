// next-auth
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// service functions
import { createGuest, getGuest } from "@/app/_lib/services";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ],
    callbacks: {
        authorized({ auth }) {
            return !!auth?.user;
        },
        // Runs before sign in process, like middleware
        // Check if user already exists in DB or create a new one
        // SignIn callback returns true or false
        async signIn({ user }) {
            try {
                const existingGuest = await getGuest(user.email);
                // console.log("Existing guest: ", existingGuest);
                let newGuest;
                if (!existingGuest) {
                    newGuest = await createGuest({
                        email: user.email,
                        name: user.name,
                        imageUrl: user.image
                    });
                }
                // console.log("New guest created: ", newGuest);
                return true;
            } catch {
                return false;
            }
        },
        // Runs after signIn callback and each time when session is checked
        async session({ session }) {
            const guest = await getGuest(session.user.email);
            session.user.guestId = guest.id;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    }
});