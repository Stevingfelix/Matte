"use client";

import { Container } from "react-bootstrap";
import TeamCard from "../../components/cards/TeamCard";
import PageHeader from "../../components/common/PageHeader";
import PikizSlider from "../../components/common/PikizSlider";
import Layout from "../../components/layout/Layout";
import { teamMembers } from "../../data/team";

export default function TeamCarousel() {
  return (
    <Layout overflowVisible header={{ variant: "one" }} footer="one" footerCta>
      <PageHeader title="team" />
      <section className="team-one">
        <Container>
          <PikizSlider
            className="team-one__carousel pikiz-slick__carousel--basic-nav"
            infinite
            slidesToShow={3}
            slidesToScroll={3}
            autoplay
            autoplaySpeed={4000}
            speed={2000}
            arrows={false}
            dots
            responsive={[
              { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
              { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]}
          >
            {teamMembers.map((m, i) => (
              <div className="item" key={i}>
                <TeamCard {...m} noAnimation />
              </div>
            ))}
          </PikizSlider>
        </Container>
      </section>
    </Layout>
  );
}
