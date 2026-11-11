"use client";

import { Container } from "react-bootstrap";
import useScrollPosition from "../../hooks/useScrollPosition";
import { mainMenu, onePageMenu, type MenuItem } from "../../data/navigation";
import { ROUTES } from "../../data/routes";
import BrandLogo from "../common/BrandLogo";
import PikizButton from "../common/PikizButton";
import SmartLink from "../common/SmartLink";
import NavMenu from "./NavMenu";
import { useLayout } from "./LayoutContext";

export interface HeaderProps {
  variant?: "one" | "two" | "three" | "four" | "five";
  logo?: "dark" | "light";
  /** "one" => animated pikiz-btn, "two" => flat pikiz-btn-two, "none" => no button */
  buttonStyle?: "one" | "two" | "none";
  /** show the "Menu" / "Subscribe" side-panel trigger (home 3 & 4) */
  sidePanelTrigger?: boolean;
  sidePanelLabel?: string;
  blur?: boolean;
  onePage?: boolean;
  menuItems?: MenuItem[];
  ctaTo?: string;
}

const menuMod: Record<string, string> = {
  one: "",
  two: "main-menu--two",
  three: "main-menu--three",
  four: "main-menu--four",
  five: "main-menu--five",
};

function SidePanelTrigger({ label = "Menu", subscribeButton }: { label?: string; subscribeButton?: boolean }) {
  const { setSidebarOpen } = useLayout();
  return (
    <div className="bw-popup-box-trigger">
      <a
        href="#"
        className={`bw-popup-box-trigger-item ${subscribeButton ? "bw-popup-box-trigger-item--subscribe" : ""}`.trim()}
        onClick={(e) => {
          e.preventDefault();
          setSidebarOpen(true);
        }}
      >
        {subscribeButton ? (
          <>
            <i className="far fa-envelope" aria-hidden="true"></i>
            <span>{label}</span>
          </>
        ) : (
          <>
            <span className="popup-text">{label}</span>
            <div className="popup-nav">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </>
        )}
      </a>
    </div>
  );
}

function HeaderBar({
  variant = "one",
  logo = "dark",
  buttonStyle,
  sidePanelTrigger,
  sidePanelLabel,
  blur,
  onePage,
  menuItems,
  ctaTo,
  cloned,
  active,
}: HeaderProps & { cloned?: boolean; active?: boolean }) {
  const { toggleMobileNav, brand } = useLayout();
  const btn = buttonStyle ?? (variant === "three" ? "two" : "one");
  const listMod = variant === "two" ? "main-menu__list--two" : "";
  const headerCls = [
    "main-header",
    `main-header--${variant}`,
    blur ? "bg-blur" : "",
    "sticky-header",
    cloned ? "sticky-header--cloned" : "sticky-header--normal",
    cloned && active ? "active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerCls}>
      <Container>
        <div className="main-header__inner">
          <div className="main-header__logo">
            <SmartLink to={brand.homePath}>
              <BrandLogo brand={brand} variant={logo} width={120} />
            </SmartLink>
          </div>
          {variant === "four" && sidePanelTrigger && <SidePanelTrigger />}
          <nav className={`main-header__nav main-menu ${menuMod[variant]}`.trim()}>
            <NavMenu
              items={menuItems ?? (onePage ? onePageMenu : mainMenu)}
              className={`${listMod} ${onePage ? "one-page-scroll-menu" : ""}`.trim()}
              onePage={onePage}
            />
          </nav>
          <div className="main-header__right">
            <div className="mobile-nav__btn mobile-nav__toggler" onClick={toggleMobileNav}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {variant === "five" && sidePanelTrigger && (
              <SidePanelTrigger label={sidePanelLabel ?? "Subscribe"} subscribeButton />
            )}
            {btn !== "none" && !(variant === "five" && sidePanelTrigger) && (
              <div className="main-header__btn">
                <PikizButton to={ctaTo ?? ROUTES.contact} label="Let’s Talk" variant={btn === "two" ? "two" : "one"} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

/** Main header + the cloned sticky header that slides in when scrolling up */
export default function Header(props: HeaderProps) {
  const { up } = useScrollPosition();
  return (
    <>
      <HeaderBar {...props} />
      <HeaderBar {...props} cloned active={up} />
    </>
  );
}
