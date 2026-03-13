import "@/styles/globals.css";
import type { Metadata } from "next";
import { appMetadata } from "@/packages/metadata/metadata.app";
import { inter, poppins } from "@/packages/configs/config.styles";
import AppLayoutClient from "@/components/layouts/AppLayoutClient";

export const metadata: Metadata = appMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} relative scroll-smooth antialiased`}>
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}
