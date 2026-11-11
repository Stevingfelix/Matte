import type { Metadata } from "next";
import SiteStyles from "@/src/components/layout/SiteStyles";
import NotFound from "@/src/views/inner/NotFound";

export const metadata: Metadata = { title: "404 Error" };

export default function NotFoundPage() {
  return (
    <>
      <SiteStyles />
      <NotFound />
    </>
  );
}
