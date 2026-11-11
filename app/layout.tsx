import type { Metadata } from "next";
import "@fontsource/inter/latin.css";
import "@fontsource/bricolage-grotesque/latin.css";
import "slick-carousel/slick/slick.css";
import "@/src/assets/vendors/pikiz-icons/style.css";
import "@/src/assets/vendors/fontawesome/css/all.min.css";
import "@/src/assets/css/animate.min.css";
import ClickSoundListener from "@/src/components/common/ClickSoundListener";

const SITE_TITLE = "Pikiz || Creative Agency Portfolio ReactJS Template";

export const metadata: Metadata = {
  title: { default: SITE_TITLE, template: `%s || ${SITE_TITLE}` },
  icons: { icon: [{ url: "/assets/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" }] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClickSoundListener />
        {children}
      </body>
    </html>
  );
}
