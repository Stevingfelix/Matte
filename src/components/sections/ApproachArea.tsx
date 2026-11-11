"use client";

import { Container } from "react-bootstrap";
import Counter from "../common/Counter";
import SectionTitle from "../common/SectionTitle";

const defaultFeatures = [
  { icon: "icon-megaphone", title: "Problem Discovery", text: "We audit your product, audience, and market positioning to surface the highest-leverage opportunities.", delay: "300ms" },
  { icon: "icon-settings", title: "System Execution", text: "We translate strategy into scalable design systems, fast frontends, and measurable brand moments.", delay: "500ms" },
];

interface Props {
  id?: string;
  subtitle?: string;
  years?: number;
  yearsText?: string;
  title?: string;
  features?: typeof defaultFeatures;
}

/** "Approach" block with years-of-experience counter (about + home four) */
export default function ApproachArea({
  id,
  subtitle = "Approach",
  years = 25,
  yearsText = "Years of experience in this field",
  title = "Let’s Shape The Future Of Your Brand,Together.",
  features = defaultFeatures,
}: Props = {}) {
  return (
    <section className="approach-area" id={id}>
      <Container>
        <div className="approach-area__content">
          <SectionTitle subtitle={subtitle} />
          <div className="approach-area__content__box">
            <div className="approach-area__experience">
              <Counter stop={years} className="approach-area__experience__count" />
              <p className="approach-area__experience__text">{yearsText}</p>
            </div>
            <h2 className="approach-area__title bw-spilt-title-one">{title}</h2>
            <div className="approach-area__feature">
              {features.map((f, i) => (
                <div className="approach-area__feature__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={f.delay} key={i}>
                  <div className="approach-area__feature__icon">
                    <i className={f.icon}></i>
                  </div>
                  <div className="approach-area__feature__content">
                    <h3 className="title">{f.title}</h3>
                    <div className="text">{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
