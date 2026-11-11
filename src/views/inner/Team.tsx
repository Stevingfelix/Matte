"use client";

import PageHeader from "../../components/common/PageHeader";
import Layout from "../../components/layout/Layout";
import TeamOne from "../../components/sections/TeamOne";

export default function Team() {
  return (
    <Layout header={{ variant: "one" }} footer="one" footerCta>
      <PageHeader title="team" />
      <TeamOne />
    </Layout>
  );
}
