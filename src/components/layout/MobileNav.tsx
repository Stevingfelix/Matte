"use client";

import { mainMenu, onePageMenu, type MenuItem } from "../../data/navigation";
import BrandLogo from "../common/BrandLogo";
import SmartLink from "../common/SmartLink";
import NavMenu from "./NavMenu";
import { useLayout } from "./LayoutContext";

export default function MobileNav({ onePage, menuItems }: { onePage?: boolean; menuItems?: MenuItem[] }) {
  const { mobileNavOpen, toggleMobileNav, closeMobileNav, brand } = useLayout();
  return (
    <div className={`mobile-nav__wrapper ${mobileNavOpen ? "expanded" : ""}`}>
      <div className="mobile-nav__overlay mobile-nav__toggler" onClick={toggleMobileNav}></div>
      <div className="mobile-nav__content">
        <button type="button" className="mobile-nav__close mobile-nav__toggler" onClick={toggleMobileNav}>
          <i className="fas fa-times"></i>
        </button>
        <div className="logo-box">
          <SmartLink to={brand.homePath} aria-label={`${brand.name} home`} onClick={closeMobileNav}>
            <BrandLogo brand={brand} variant="light" width={120} />
          </SmartLink>
        </div>
        <div className="mobile-nav__container">
          <NavMenu items={menuItems ?? (onePage ? onePageMenu : mainMenu)} mobile onePage={onePage} onNavigate={closeMobileNav} />
        </div>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href={`tel:${brand.phone}`}>{brand.displayPhone}</a>
          </li>
        </ul>
        <div className="mobile-nav__social">
          {brand.socials.map((s) => (
            <a href={s.href} key={s.label}>
              <i className={s.icon}></i>
              <span className="sr-only">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
