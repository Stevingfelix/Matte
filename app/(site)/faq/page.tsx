import type { Metadata } from "next";
import Faq from "@/src/views/inner/Faq";

export const metadata: Metadata = { title: "Faq" };

export default function Page() {
  return <Faq />;
}
