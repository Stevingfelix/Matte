import type { Metadata } from "next";
import DemoLanding from "@/src/views/DemoLanding";

export const metadata: Metadata = { title: { absolute: "Pikiz - Creative Agency Portfolio ReactJS Template" } };

export default function Page() {
  return <DemoLanding />;
}
