import type { Metadata } from "next";
import HomeOne from "@/src/views/home/HomeOne";

export const metadata: Metadata = { title: "Home One" };

export default function Page() {
  return <HomeOne onePage />;
}
