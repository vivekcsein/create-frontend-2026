"use client";

import FontProvider from "../providers/FontProvider";

interface AppClientLayoutProps {
  children: React.ReactNode;
}

const AppClientLayout = ({ children }: Readonly<AppClientLayoutProps>) => {
  return (
    <main className="flex flex-col">
      <FontProvider>{children}</FontProvider>
    </main>
  );
};

export default AppClientLayout;
