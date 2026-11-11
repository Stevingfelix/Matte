import type { Metadata } from "next";
import Work from "@/src/views/inner/Work";

export const metadata: Metadata = { title: "Work" };

export default function Page() {
  return <Work />;
}
