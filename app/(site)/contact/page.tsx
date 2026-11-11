import type { Metadata } from "next";
import Contact from "@/src/views/inner/Contact";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return <Contact />;
}
