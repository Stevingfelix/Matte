import type { Metadata } from "next";
import HomeThree from "@/src/views/home/HomeThree";

export const metadata: Metadata = { title: { absolute: "Matte — Digital Strategy & Creative Studio" } };

export default function Page() {
  return <HomeThree onePage />;
}
