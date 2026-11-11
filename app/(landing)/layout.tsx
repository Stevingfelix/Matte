export default function LandingLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/pikiz-landing.css" />
      {children}
    </>
  );
}
