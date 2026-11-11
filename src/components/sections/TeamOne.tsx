"use client";

import { Col, Container, Row } from "react-bootstrap";
import { teamMembers } from "../../data/team";
import TeamCard from "../cards/TeamCard";
import SectionTitle from "../common/SectionTitle";

const TEXT = (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Duis cursus mi quis viverra ornare.
  </>
);

/** Team grid (home two: first 3 members, team page: all 6) */
export default function TeamOne({ limit }: { limit?: number }) {
  const members = limit ? teamMembers.slice(0, limit) : teamMembers;
  return (
    <section className="team-one">
      <Container>
        <div className="team-one__top">
          <Row className="gutter-y-30">
            <Col md={6}>
              <SectionTitle subtitle="The Team " text={TEXT} />
            </Col>
            <Col md={6}>
              <SectionTitle title="Team" titleDelay="0.20" />
            </Col>
          </Row>
        </div>
        <Row className="gutter-y-30">
          {members.map((m, i) => (
            <Col lg={4} md={6} sm={6} key={i}>
              <TeamCard {...m} delay={`${100 + (i % 3) * 200}ms`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
