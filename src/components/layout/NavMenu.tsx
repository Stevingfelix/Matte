"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { MenuItem } from "../../data/navigation";
import SmartLink from "../common/SmartLink";
import MegaMenu from "./MegaMenu";

interface Props {
  items: MenuItem[];
  className?: string;
  /** mobile drawer mode: dropdowns toggle with a button instead of hover */
  mobile?: boolean;
  onNavigate?: () => void;
  onePage?: boolean;
}

function hasCurrent(item: MenuItem, path: string): boolean {
  if (item.to === path) return true;
  return !!item.children?.some((c) => hasCurrent(c, path));
}

function Item({
  item,
  mobile,
  onNavigate,
  onePage,
  path,
  current,
  onSelectHash,
}: {
  item: MenuItem;
  mobile?: boolean;
  onNavigate?: () => void;
  onePage?: boolean;
  path: string;
  current: boolean;
  onSelectHash?: (hash: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const isDropdown = !!item.children || item.megamenu;
  const cls = [
    isDropdown ? "dropdown" : "",
    item.megamenu ? "megamenu" : "",
    onePage ? "scrollToLink" : "",
    current ? "current" : "",
    mobile && open ? "expanded" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={cls}>
      <SmartLink
        to={item.to ?? "#"}
        onClick={(e) => {
          if (!item.to) {
            e.preventDefault();
          } else {
            if (onePage && item.to.startsWith("#")) onSelectHash?.(item.to);
            onNavigate?.();
          }
        }}
      >
        {item.label}
        {mobile && isDropdown && (
          <button
            aria-label="dropdown toggler"
            className={open ? "expanded" : ""}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen((o) => !o);
            }}
          >
            <i className="fa fa-angle-down"></i>
          </button>
        )}
      </SmartLink>
      {isDropdown && (
        <ul className={item.children ? "sub-menu" : undefined} style={mobile ? { display: open ? "block" : "none" } : undefined}>
          {item.megamenu ? (
            <li>
              <MegaMenu />
            </li>
          ) : (
            item.children!.map((child) => (
              <Item
                key={child.label}
                item={child}
                mobile={mobile}
                onNavigate={onNavigate}
                path={path}
                current={hasCurrent(child, path)}
              />
            ))
          )}
        </ul>
      )}
    </li>
  );
}

export default function NavMenu({ items, className = "", mobile, onNavigate, onePage }: Props) {
  const pathname = usePathname();
  const firstHash = items.find((item) => item.to?.startsWith("#"))?.to ?? "";
  const [activeHash, setActiveHash] = useState(firstHash);

  useEffect(() => {
    if (!onePage) return;
    const hashes = items.map((item) => item.to).filter((to): to is string => !!to && to.startsWith("#"));
    if (!hashes.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const offset = window.innerHeight * 0.35;
      let current = hashes[0];
      for (const hash of hashes) {
        const el = document.querySelector(hash);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = hash;
        }
      }
      setActiveHash(current);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [items, onePage]);

  return (
    <ul className={`main-menu__list ${className}`.trim()}>
      {items.map((item, i) => {
        const current = onePage
          ? item.to
            ? item.to === activeHash
            : i === 0
          : hasCurrent(item, pathname);
        return (
          <Item
            key={item.label}
            item={item}
            mobile={mobile}
            onNavigate={onNavigate}
            onePage={onePage}
            path={pathname}
            current={current}
            onSelectHash={setActiveHash}
          />
        );
      })}
    </ul>
  );
}
