import type { Metadata } from "next";
import Packages from "@/src/views/inner/Packages";

export const metadata: Metadata = { title: "Plans" };

export default function Page() {
  return <Packages carousel />;
}
