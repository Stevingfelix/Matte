import type { Metadata } from "next";
import TeamCarousel from "@/src/views/inner/TeamCarousel";

export const metadata: Metadata = { title: "Team Carousel" };

export default function Page() {
  return <TeamCarousel />;
}
