import type { Metadata } from "next";
import TeamDetails from "@/src/views/inner/TeamDetails";

export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return <TeamDetails />;
}
