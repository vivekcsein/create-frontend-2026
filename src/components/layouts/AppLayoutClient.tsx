"use client";

import Header from "./Header";
import Footer from "./Footer";
import { HamburgerMenuProvider } from "../providers/HamburgerProvider";

interface AppLayoutClientProps {
  children: React.ReactNode;
}

export default function AppLayoutClient({ children }: AppLayoutClientProps) {
  return (
    <HamburgerMenuProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-8">{children}</main>
        <Footer />
      </div>
    </HamburgerMenuProvider>
  );
}
