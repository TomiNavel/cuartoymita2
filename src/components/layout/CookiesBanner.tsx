"use client";

import dynamic from "next/dynamic";

const CookiesBannerClient = dynamic(() => import("./CookiesBannerClient"), {
  ssr: false,
});

export default function CookiesBanner() {
  return <CookiesBannerClient />;
}
