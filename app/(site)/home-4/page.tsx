import type { Metadata } from "next";
import HomeFour from "@/src/views/home/HomeFour";

export const metadata: Metadata = { title: { absolute: "Grumpy — AI Product & SaaS UX/UI Design Agency" } };

export default function Page() {
  return <HomeFour />;
}
