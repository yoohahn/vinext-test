import { notFound } from "next/navigation";
import Client from "./Client";
import { Suspense } from "react";

export const revalidate = 60;
export const dynamic = "force-static";

export default async function Page({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const id = (await params).uuid;

  return (
    <div>
      UUID Page: {id}
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </div>
    </div>
  );
}
