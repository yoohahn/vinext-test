import Link from "next/link";
import { MyLink } from "./Link";

export const metadata = { title: "nextjs-test" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
