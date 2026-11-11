import SiteStyles from "@/src/components/layout/SiteStyles";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteStyles />
      {children}
    </>
  );
}
