import type { Metadata } from "next";
import ServiceDetails from "@/src/views/inner/ServiceDetails";

export const metadata: Metadata = { title: "Services Details" };

export default function Page() {
  return <ServiceDetails />;
}
