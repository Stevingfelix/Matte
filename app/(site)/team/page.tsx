import type { Metadata } from "next";
import Team from "@/src/views/inner/Team";

export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return <Team />;
}
