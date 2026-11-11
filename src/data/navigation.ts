import { ROUTES } from "./routes";

export interface MenuItem {
  label: string;
  to?: string;
  children?: MenuItem[];
  megamenu?: boolean;
}

export interface DemoItem {
  title: string;
  image: string;
  buttons: { label: string; to: string }[];
  titleTo: string;
}

export const demos: DemoItem[] = [
  { title: "Home Page 01", image: "home-1.jpg", titleTo: ROUTES.home, buttons: [{ label: "Multi Page", to: ROUTES.home }, { label: "One Page", to: ROUTES.homeOnePage }] },
  { title: "Home Page 02", image: "home-2.jpg", titleTo: ROUTES.home, buttons: [{ label: "Multi Page", to: ROUTES.home2 }, { label: "One Page", to: ROUTES.home2OnePage }] },
  { title: "Home Page 03", image: "home-3.jpg", titleTo: ROUTES.home, buttons: [{ label: "Multi Page", to: ROUTES.home3 }, { label: "One Page", to: ROUTES.home3OnePage }] },
  { title: "Home Page 04", image: "home-4.jpg", titleTo: ROUTES.home, buttons: [{ label: "Multi Page", to: ROUTES.home4 }, { label: "One Page", to: ROUTES.home4OnePage }] },
  { title: "Home Dark", image: "home-dark.jpg", titleTo: ROUTES.homeDark, buttons: [{ label: "View Page", to: ROUTES.homeDark }] },
  { title: "Home Boxed", image: "home-boxed.jpg", titleTo: ROUTES.homeBoxed, buttons: [{ label: "View Page", to: ROUTES.homeBoxed }] },
  { title: "Home RTL", image: "home-rtl.jpg", titleTo: ROUTES.homeRtl, buttons: [{ label: "View Page", to: ROUTES.homeRtl }] },
  { title: "Box Effect", image: "portfolio-box-effect.jpg", titleTo: ROUTES.portfolioBoxEffect, buttons: [{ label: "View Page", to: ROUTES.portfolioBoxEffect }] },
];

export const mainMenu: MenuItem[] = [
  { label: "Home", to: ROUTES.home, megamenu: true },
  { label: "about", to: ROUTES.about },
  {
    label: "Work",
    children: [
      { label: "Work", to: ROUTES.work },
      { label: "Work Details", to: ROUTES.workDetails },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Team Page", to: ROUTES.team },
      { label: "Team Carousel", to: ROUTES.teamCarousel },
      { label: "Team Details", to: ROUTES.teamDetails },
      { label: "Pricing", to: ROUTES.packages },
      { label: "Pricing Carousel", to: ROUTES.packagesCarousel },
      { label: "FAQs", to: ROUTES.faq },
      { label: "Login", to: ROUTES.login },
      { label: "404 Error", to: "/404" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Services", to: ROUTES.services },
      { label: "Brand Identity", to: ROUTES.serviceBrand },
      { label: "Communication", to: ROUTES.serviceCommunication },
      { label: "Research", to: ROUTES.serviceResearch },
      { label: "Consultation", to: ROUTES.serviceConsultation },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "News grid", to: ROUTES.blogGrid },
      {
        label: "News list",
        children: [
          { label: "No sidebar", to: ROUTES.blogList },
          { label: "Left sidebar", to: ROUTES.blogListLeft },
          { label: "Right sidebar", to: ROUTES.blogListRight },
        ],
      },
      {
        label: "News details",
        children: [
          { label: "No sidebar", to: ROUTES.blogDetails },
          { label: "Left sidebar", to: ROUTES.blogDetailsLeft },
          { label: "Right sidebar", to: ROUTES.blogDetailsRight },
        ],
      },
    ],
  },
  { label: "Contact", to: ROUTES.contact },
];

/** menu used by the one-page home variants (hash anchors) */
export const onePageMenu: MenuItem[] = [
  { label: "Home", to: "#home", megamenu: true },
  { label: "About", to: "#about" },
  { label: "Project", to: "#project" },
  { label: "Services", to: "#services" },
  { label: "Faqs", to: "#faq" },
  { label: "Blog", to: "#blog" },
];

export const matteOnePageMenu: MenuItem[] = [
  { label: "Home", to: "#home" },
  { label: "Work", to: "#work" },
  { label: "Impact", to: "#impact" },
  { label: "Services", to: "#services" },
  { label: "Pricing", to: "#pricing" },
  { label: "Faqs", to: "#faq" },
  { label: "Contact", to: "#contact" },
];

export const matteMultiMenu: MenuItem[] = [
  { label: "Matte", to: ROUTES.home3 },
  { label: "Work", to: ROUTES.work },
  { label: "Services", to: ROUTES.services },
  { label: "About", to: ROUTES.about },
  { label: "Contact", to: ROUTES.contact },
];

export const grumpyOnePageMenu: MenuItem[] = [
  { label: "Home", to: "#home" },
  { label: "Work", to: "#work" },
  { label: "Services", to: "#services" },
  { label: "Reviews", to: "#testimonial" },
  { label: "Pricing", to: "#pricing" },
  { label: "Faqs", to: "#faq" },
  { label: "Contact", to: "#contact" },
  { label: "Matte ↗", to: ROUTES.home3OnePage },
];

export const grumpyMultiMenu: MenuItem[] = [
  { label: "Grumpy", to: ROUTES.home4 },
  { label: "Work", to: ROUTES.work },
  { label: "Services", to: ROUTES.services },
  { label: "About", to: ROUTES.about },
  { label: "Contact", to: ROUTES.contact },
  { label: "Matte ↗", to: ROUTES.home3 },
];

export const footerLinks = [
  { label: "Home", to: ROUTES.home },
  { label: "Agency", to: ROUTES.about },
  { label: "Achievement", to: ROUTES.workDetails },
  { label: "Career", to: ROUTES.contact },
  { label: "Contact Us", to: ROUTES.contact },
  { label: "UI/UX Design", to: ROUTES.serviceResearch },
];

export const footerBottomLinks = [
  { label: "Terms", to: ROUTES.faq },
  { label: "Style Guide", to: ROUTES.about },
  { label: "Password", to: ROUTES.contact },
];
