"use client";

interface AppClientLayoutProps {
  children: React.ReactNode;
}

const AppClientLayout = ({ children }: Readonly<AppClientLayoutProps>) => {
  return <main className="flex flex-col">{children}</main>;
};

export default AppClientLayout;
