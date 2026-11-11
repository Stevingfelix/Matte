"use client";

import { Container } from "react-bootstrap";
import { grumpyWorks } from "../../../data/grumpy";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import SectionTitleThree from "../../common/SectionTitleThree";
import SmartLink from "../../common/SmartLink";

export default function WorkFour({ id, onePage }: { id?: string; onePage?: boolean }) {
  return (
    <section className="work-four" id={id}>
      <Container>
        <div className="work-four__top">
          <SectionTitleThree
            border
            title="SHIPPED Work"
            subtitle="AI & SaaS Case Studies"
            btnLabel={onePage ? "Start a Project" : "All Work"}
            btnTo={onePage ? "#contact" : ROUTES.work}
          />
        </div>
        <div className="work-four__wrap bwfade-anim">
          {grumpyWorks.map((w, i) => {
            const href = onePage ? "#contact" : w.to;
            return (
              <div className={`work-four__item ${w.full ? "work-four__item--full" : ""}`.trim()} key={i}>
                <div className="work-four__item__thumb scale cursor-text" data-cursor-text={onePage ? "Inquire" : "View Project"}>
                  <SmartLink to={href}>
                    <img src={img(`resources/${w.image}`)} alt={w.title} />
                  </SmartLink>
                </div>
                <div className="work-four__item__content">
                  <div className="work-four__item__content-box">
                    <h3 className="work-four__item__title">
                      <SmartLink to={href}>{w.title}</SmartLink>
                    </h3>
                    <p className="work-four__item__subtitle">{w.subtitle}</p>
                  </div>
                  <div className="tag">
                    {w.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
