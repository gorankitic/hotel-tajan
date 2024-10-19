// components
import Header from "@/app/_components/Header";
import ReservationProvider from "@/app/_components/ReservationContext";
// font
import { Forum } from "next/font/google";
// styles
import "@/app/_styles/globals.css";

const forum = Forum({
  subsets: ["cyrillic"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: {
    template: "Хотел Тајан | %s",
    default: "Хотел Тајан | Добро дошли",
  },
  description: "Удобни апартмани хотела Тајан смјештени у срцу планине Борје.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${forum.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative px-10`}
      >
        <Header />
        <div className="flex-1 grid mt-8 mb-10">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
