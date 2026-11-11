"use client";

import { sidebarCategories, sidebarLatestPosts, sidebarTags } from "../../data/blogList";
import { ROUTES } from "../../data/routes";
import { img } from "../../utils";
import PikizButton from "../common/PikizButton";
import SmartLink from "../common/SmartLink";

const wow = { "data-wow-duration": "1500ms", "data-wow-delay": "300ms" };

interface Props {
  /** wrap widgets in <aside class="widget-area"> (list pages do, detail pages don't) */
  aside?: boolean;
  /** which blog route the category / tag links point to */
  linkTo?: string;
}

/** Blog sidebar: search, categories, latest posts, tags, help card */
export default function BlogSidebar({ aside, linkTo = ROUTES.blogListRight }: Props) {
  const widgets = (
    <>
      <div className="sidebar__single sidebar__single__search wow fadeInUp" {...wow}>
        <form action="#" className="sidebar__search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search" />
          <button type="submit" aria-label="search submit">
            <i className="icon-search"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__single wow fadeInUp" {...wow}>
        <h3 className="sidebar__title bw-spilt-title-two">Categories</h3>
        <ul className="sidebar__categories list-unstyled">
          {sidebarCategories.map((c) => (
            <li key={c}>
              <SmartLink to={linkTo}>
                <i className="fas fa-angle-double-right"></i>
                {c}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single wow fadeInUp" {...wow}>
        <h3 className="sidebar__title bw-spilt-title-two">Latest Post</h3>
        <ul className="sidebar__posts list-unstyled">
          {sidebarLatestPosts.map((p) => (
            <li className="sidebar__posts__item" key={p.image}>
              <div className="sidebar__posts__image">
                <img src={img(`blog/${p.image}`)} alt="pikiz" />
              </div>
              <div className="sidebar__posts__content">
                <p className="sidebar__posts__meta">{p.date}</p>
                <h4 className="sidebar__posts__title">
                  <SmartLink to={ROUTES.blogDetailsRight}>{p.title}</SmartLink>
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single wow fadeInUp" {...wow}>
        <h3 className="sidebar__title bw-spilt-title-two">Tags</h3>
        <div className="sidebar__tags">
          {sidebarTags.map((t) => (
            <SmartLink to={linkTo} key={t}>
              {t}
            </SmartLink>
          ))}
        </div>
      </div>
      <div className="sidebar__single-two wow fadeInUp" {...wow}>
        <div className="sidebar__help">
          <h4 className="sidebar__help__title bw-spilt-title-two">Growing with Smart Ideas</h4>
          <p className="sidebar__help__text">
            Contact an expert <br /> Advanced Business analytics
          </p>
          <PikizButton to={ROUTES.contact} label="Support Now" />
        </div>
      </div>
    </>
  );

  return <div className="sidebar">{aside ? <aside className="widget-area">{widgets}</aside> : widgets}</div>;
}
