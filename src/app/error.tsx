"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GlobalError({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    const msg = encodeURIComponent(error.message || "Unknown error occurred");
    router.push(`/error?message=${msg}`);
  }, [error, router]);

  return null;
}
