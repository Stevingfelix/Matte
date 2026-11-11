import type { Metadata } from "next";
import WorkDetails from "@/src/views/inner/WorkDetails";

export const metadata: Metadata = { title: "Navan Branding" };

export default function Page() {
  return <WorkDetails />;
}
