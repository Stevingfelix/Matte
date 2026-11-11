import type { Metadata } from "next";
import BlogList from "@/src/views/blog/BlogList";

export const metadata: Metadata = { title: "Blog List" };

export default function Page() {
  return <BlogList sidebar="left" />;
}
