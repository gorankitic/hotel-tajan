// next-auth
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// service functions
import { getGuest, createGuest } from "@/app/_lib/services";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        })
    ],
    callbacks: {
        authorized({ auth }) {
            return !!auth?.user;
        },
        async signIn({ user }) {
            try {
                const existingGuest = await getGuest(user.email);

                if (!existingGuest) {
                    await createGuest({ email: user.email, name: user.name });
                }

                return true;
            } catch {
                return false;
            }
        },
        async session({ session }) {
            const guest = await getGuest(session.user.email);
            session.user._id = guest._id;
            return session;

        }
    },
    pages: {
        signIn: "/login"
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig);