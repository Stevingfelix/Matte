"use client";

import { useState } from "react";

/** Prev / 01 02 03 / Next pager (visual only, like the template) */
export default function Pagination({ pages = 3 }: { pages?: number }) {
  const [page, setPage] = useState(1);
  const go = (n: number) => setPage(Math.min(Math.max(n, 1), pages));
  return (
    <div className="post-pagination">
      <button className="post-pagination__button" onClick={() => go(page - 1)}>
        <span className="post-pagination__button__icon">
          <i className="icon-long-icon-left"></i>
        </span>{" "}
        PREVIOUS
      </button>
      <ul className="post-pagination__list list-unstyled">
        {Array.from({ length: pages }, (_, i) => (
          <li key={i} className={page === i + 1 ? "active" : undefined}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go(i + 1);
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </a>
          </li>
        ))}
      </ul>
      <button className="post-pagination__button" onClick={() => go(page + 1)}>
        Next{" "}
        <span className="post-pagination__button__icon">
          <i className="icon-long-icon-right"></i>
        </span>
      </button>
    </div>
  );
}
