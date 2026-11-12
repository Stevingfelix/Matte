"use client";

import { Col, Container, Row } from "react-bootstrap";
import { SECTION_INTRO } from "../../data/content";
import { img } from "../../utils";
import Counter from "../common/Counter";
import PikizButton from "../common/PikizButton";
import SectionTitle from "../common/SectionTitle";
import styles from "./FunfactOne.module.css";

interface FunfactStat {
  text: string;
  stop: number;
  suffix?: string;
  prefix?: string;
  delay: string;
}

interface FunfactProof {
  value: string;
  label: string;
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
  proofs?: FunfactProof[];
  partners?: string[];
  reveal?: FunfactReveal;
}

/** "Strategic Actions" stats block (about + home three/four) */
export default function FunfactOne({
  id,
  title = "Strategic Actions",
  intro = `${SECTION_INTRO} We’re a digital products design`,
  stats = defaultStats,
  proofs,
  partners,
  reveal,
}: Props = {}) {
  const tickerItems = partners && partners.length > 0 ? [...partners, ...partners, ...partners] : [];
  const floatDelays = [styles.statCircleDelay1, styles.statCircleDelay2, styles.statCircleDelay3];

  return (
    <section className={`funfact-one ${reveal ? styles.impactSection : ""}`.trim()} id={id}>
      {tickerItems.length > 0 && (
        <div className={styles.partnerStrip} aria-label="Partner showcase">
          <div className={styles.partnerTrack}>
            {tickerItems.map((partner, idx) => (
              <span className={styles.partnerItem} key={`${partner}-${idx}`}>
                <span className={styles.partnerDot} aria-hidden="true" />
                {partner}
              </span>
            ))}
          </div>
        </div>
      )}
      <Container>
        <div className="funfact-one__top">
          <SectionTitle title={title} />
        </div>
        <Row className="gutter-y-30">
          <Col xl={5}>
            <div className="funfact-one__content">
              <p className={`funfact-one__text bw-split-text ${proofs?.length ? styles.introCompact : ""}`.trim()}>
                {intro}
              </p>
              {proofs && proofs.length > 0 && (
                <div className={styles.proofList}>
                  {proofs.map((proof) => (
                    <div className={styles.proofItem} key={proof.label}>
                      <span className={styles.proofValue}>{proof.value}</span>
                      <span className={styles.proofLabel}>{proof.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className={`funfact-one__shape ${reveal ? styles.shapeIdle : ""}`.trim()}>
                <img src={img("shapes/shape-round.png")} alt="shape" />
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <div className="funfact-one__content-box">
              {stats.map((s, idx) => (
                <div
                  className={`funfact-one__content-box__item wow bounceInUp ${reveal ? styles.statCircle : ""} ${reveal && idx === 0 ? styles.statCircleFeatured : ""} ${reveal ? floatDelays[idx % floatDelays.length] : ""}`.trim()}
                  data-wow-duration="1500ms"
                  data-wow-delay={s.delay}
                  key={s.text}
                >
                  <div className={reveal ? styles.statCircleInner : undefined}>
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
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      {reveal && (
        <div className={`funfact-one__reveal ${styles.revealAmbient}`}>
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
