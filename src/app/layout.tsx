import "@styles/globals.css";
import "@styles/ui.css";
import AppClientLayout from "@/components/layouts/AppClientLayout";
import { AppMetaData } from "@/packages/metadata/meta.app";
import { DESIGN_LANGUAGE } from "@/packages/configs/config.fonts";

export const metadata = AppMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`relative h-full scroll-smooth antialiased`}>
      <body
        className={`${DESIGN_LANGUAGE.MINIMAL.body} bg-background text-foreground min-h-screen`}
      >
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
