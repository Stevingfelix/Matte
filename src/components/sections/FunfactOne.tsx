"use client";

import { Col, Container, Row } from "react-bootstrap";
import { SECTION_INTRO } from "../../data/content";
import { img } from "../../utils";
import Counter from "../common/Counter";
import PikizButton from "../common/PikizButton";
import SectionTitle from "../common/SectionTitle";

interface FunfactStat {
  text: string;
  stop: number;
  suffix?: string;
  prefix?: string;
  delay: string;
}

export interface FunfactReveal {
  eyebrow?: string;
  title: string;
  highlight?: string;
  text: string;
  pillars?: string[];
  ctaLabel?: string;
  ctaTo?: string;
}

const defaultStats: FunfactStat[] = [
  { text: "Successful Projects", stop: 15, suffix: "K+", delay: "100ms" },
  { text: "businesses web\nsupport", stop: 7.1, suffix: "K", delay: "300ms" },
  { text: "Reached over $14\nmilion", stop: 5, suffix: "M", prefix: "$", delay: "500ms" },
];

interface Props {
  id?: string;
  title?: string;
  intro?: string;
  stats?: FunfactStat[];
  reveal?: FunfactReveal;
}

/** "Strategic Actions" stats block (about + home three/four) */
export default function FunfactOne({
  id,
  title = "Strategic Actions",
  intro = `${SECTION_INTRO} We’re a digital products design`,
  stats = defaultStats,
  reveal,
}: Props = {}) {
  return (
    <section className="funfact-one" id={id}>
      <Container>
        <div className="funfact-one__top">
          <SectionTitle title={title} />
        </div>
        <Row className="gutter-y-30">
          <Col xl={5}>
            <div className="funfact-one__content">
              <p className="funfact-one__text bw-split-text">{intro}</p>
              <div className="funfact-one__shape">
                <img src={img("shapes/shape-round.png")} alt="shape" />
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <div className="funfact-one__content-box">
              {stats.map((s) => (
                <div className="funfact-one__content-box__item wow bounceInUp" data-wow-duration="1500ms" data-wow-delay={s.delay} key={s.text}>
                  <p className="funfact-one__content-box__text">
                    {s.text.split("\n").map((l, i, a) => (
                      <span key={i}>
                        {l}
                        {i < a.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <Counter stop={s.stop} prefix={s.prefix} suffix={s.suffix} className="funfact-one__content-box__count" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      {reveal && (
        <div className="funfact-one__reveal">
          <Container>
            <div className="funfact-one__reveal-inner">
              {reveal.eyebrow && (
                <p className="funfact-one__reveal-eyebrow">
                  <span></span>
                  {reveal.eyebrow}
                </p>
              )}
              <h2 className="funfact-one__reveal-title">
                {reveal.title}{" "}
                {reveal.highlight && <span>{reveal.highlight}</span>}
              </h2>
              <p className="funfact-one__reveal-text">{reveal.text}</p>
              {reveal.pillars && reveal.pillars.length > 0 && (
                <div className="funfact-one__reveal-pillars">
                  {reveal.pillars.map((pillar) => (
                    <span key={pillar}>{pillar}</span>
                  ))}
                </div>
              )}
              {reveal.ctaLabel && reveal.ctaTo && (
                <div>
                  <PikizButton to={reveal.ctaTo} label={reveal.ctaLabel} />
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
