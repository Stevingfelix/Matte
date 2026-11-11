"use client";

import { useState, type FormEvent } from "react";
import { img } from "../../utils";
import BrandLogo from "../common/BrandLogo";
import PikizButton from "../common/PikizButton";
import SmartLink from "../common/SmartLink";
import { useLayout } from "./LayoutContext";

/** Slide-in right panel opened by the "Menu" trigger (home 3 & 4) */
export default function HeaderSidebar() {
  const { sidebarOpen, setSidebarOpen, brand } = useLayout();
  const [subscribed, setSubscribed] = useState(false);
  const close = () => setSidebarOpen(false);
  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSubscribed(true);
  };
  return (
    <div className={`header-right-sidebar ${sidebarOpen ? "isActive" : ""}`}>
      <div className="header-right-sidebar__overlay header-right-sidebar__toggler" onClick={close}></div>
      <div className="header-right-sidebar__content">
        <button type="button" className="header-right-sidebar__close header-right-sidebar__toggler" onClick={close}>
          <i className="fa fa-times"></i>
        </button>
        <div className="header-right-sidebar__logo-box">
          <SmartLink to={brand.homePath} aria-label={`${brand.name} home`} onClick={close}>
            <BrandLogo brand={brand} variant="light" width={180} />
          </SmartLink>
        </div>
        <div className="header-right-sidebar__container">
          <div className="header-right-sidebar__container__about wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
            <p className="header-right-sidebar__container__text">{brand.aboutSidebar}</p>
          </div>
          <div className="header-right-sidebar__thumb">
            {["blog-1-1.jpg", "blog-1-2.jpg", "blog-1-3.jpg"].map((f) => (
              <div className="header-right-sidebar__thumb__item" key={f}>
                <img src={img(`blog/${f}`)} alt="image" />
              </div>
            ))}
          </div>
          <div className="header-right-sidebar__container__newsletter-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
            <h3 className="header-right-sidebar__container__title">Subscribe to {brand.name}</h3>
            <form action="#" className="newsletter-box mc-form" onSubmit={handleSubscribe}>
              <input type="email" name="EMAIL" placeholder="Email" required />
              <PikizButton type="submit" label="subscribe now" />
            </form>
            <div className="mc-form__response">
              {subscribed && <p className="mt-2 mb-0 text-success small">Subscribed to {brand.name} updates.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
