import type { Metadata } from "next";
import BlogDetails from "@/src/views/blog/BlogDetails";

export const metadata: Metadata = { title: "Blog Details" };

export default function Page() {
  return <BlogDetails sidebar="right" />;
}
