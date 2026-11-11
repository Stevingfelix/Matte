import type { Metadata } from "next";
import Services from "@/src/views/inner/Services";

export const metadata: Metadata = { title: "Services" };

export default function Page() {
  return <Services />;
}
