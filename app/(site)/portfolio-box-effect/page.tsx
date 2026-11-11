import type { Metadata } from "next";
import PortfolioBoxEffect from "@/src/views/PortfolioBoxEffect";

export const metadata: Metadata = { title: "Box Effect" };

export default function Page() {
  return <PortfolioBoxEffect />;
}
