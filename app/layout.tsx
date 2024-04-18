import type { Metadata } from "next";
import "./globals.css";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import ActiceStatus from "./components/ActiceStatus";

export const metadata: Metadata = {
  title: "Sandesh",
  description: "by Achladi Anudeep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiceStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
