import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MyLink } from "./Link";
import "./globals.css";

export const metadata: Metadata = {
  title: "vinext-test",
  description: "Minimal vinext app using the App Router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
          <MyLink href="/foo">Foo</MyLink>
          <MyLink href="/bar">Bar</MyLink>
          <MyLink href="/baz">Baz</MyLink>
        </nav>
        {children}
      </body>
    </html>
  );
}
