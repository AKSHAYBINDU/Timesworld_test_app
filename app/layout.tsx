import type { Metadata } from "next";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "./store/provider";

export const metadata: Metadata = {
  title: "NextJS TimesWorld Test APp",
  description: "Countries and their flags.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
