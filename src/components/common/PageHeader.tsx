"use client";

import type { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { img } from "../../utils";

interface Props {
  title: ReactNode;
  /** defaults to the template's standard intro line; pass `null` to hide */
  text?: ReactNode;
  className?: string;
}

const DEFAULT_TEXT = (
  <>
    Our services are designed to craft impactful digital solutions while addressing <br /> your problems through strategy, innovation, and analysis
  </>
);

/** Inner-page banner with title + intro text */
export default function PageHeader({ title, text = DEFAULT_TEXT, className = "" }: Props) {
  return (
    <section className={`page-header ${className}`.trim()}>
      <Container>
        <h2 className="page-header__title letters-fade-in">{title}</h2>
        {text && <p className="page-header__text bw-split-text">{text}</p>}
      </Container>
      <div className="page-header__shape">
        <img src={img("shapes/page-header-1-1.png")} alt="image" />
      </div>
    </section>
  );
}
