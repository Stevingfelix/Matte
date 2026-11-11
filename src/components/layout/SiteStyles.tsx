/**
 * Template stylesheets are static files (public/assets/css) so the demo landing page can use its
 * own skin instead. They sit in the body so they mount/unmount with the layout and always come
 * after the bundled CSS (bootstrap first, pikiz.css last) to keep winning the cascade.
 */
export default function SiteStyles() {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/pikiz.css" />
    </>
  );
}
