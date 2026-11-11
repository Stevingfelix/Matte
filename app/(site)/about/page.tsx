import type { Metadata } from "next";
import About from "@/src/views/inner/About";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return <About />;
}
