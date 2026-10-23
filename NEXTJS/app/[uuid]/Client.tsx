"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Client() {
  const queryParams = useSearchParams();
  const [clientTime, setClientTime] = useState<string | undefined>();
  useEffect(() => {
    setClientTime(new Date().toLocaleTimeString());
  }, []);
  return (
    <div>
      <h2>Client Component</h2>
      <h3>Client Time: {clientTime}</h3>
      <p>Query Params: {queryParams.toString() || "..."}</p>
    </div>
  );
}
