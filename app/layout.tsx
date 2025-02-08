import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satti family",
  description: "Kyle & Sabrina Satti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
