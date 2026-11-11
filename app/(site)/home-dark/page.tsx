import type { Metadata } from "next";
import HomeTwo from "@/src/views/home/HomeTwo";

export const metadata: Metadata = { title: "Home Dark" };

export default function Page() {
  return <HomeTwo dark />;
}
