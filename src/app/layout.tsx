import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Next Hero Starter - Next.js + HeroUI + Redux Toolkit",
  description: "A modern Next.js starter template with HeroUI components, Redux Toolkit state management, React Hook Form, Yup validation, and authentication boilerplate. Built with TypeScript and best practices by m0hamedesmail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex flex-1 flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
  