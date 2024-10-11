"use client";

import { Suspense } from "react";
import PageComponent from "./components/PageComponent";

export const dynamic = "force-static";
// 'auto' | 'force-dynamic' | 'force-static' | 'error'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
}
