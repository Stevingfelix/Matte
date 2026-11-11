import type { Metadata } from "next";
import BlogGrid from "@/src/views/blog/BlogGrid";

export const metadata: Metadata = { title: "Our Blog" };

export default function Page() {
  return <BlogGrid />;
}
