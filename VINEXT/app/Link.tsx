"use client";

import Link from "next/link";
import { useState } from "react";

export function MyLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [isPrefetched, setIsPrefetched] = useState(false);
  return (
    <Link
      prefetch={isPrefetched}
      href={href}
      onMouseEnter={() => setIsPrefetched(true)}
    >
      {children}
    </Link>
  );
}
