import type { Metadata } from "next";
import HomeTwo from "@/src/views/home/HomeTwo";

export const metadata: Metadata = { title: "Home Two" };

export default function Page() {
  return <HomeTwo />;
}
