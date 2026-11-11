"use client";

import BigImage from "../../components/common/BigImage";
import PageHeader from "../../components/common/PageHeader";
import Layout from "../../components/layout/Layout";
import PricingOne from "../../components/sections/PricingOne";

/** Pricing page; `carousel` swaps the stacked cards for a react-slick carousel */
export default function Packages({ carousel }: { carousel?: boolean }) {
  return (
    <Layout overflowVisible header={{ variant: "one" }} footer="one" footerCta>
      <PageHeader title="Plans" />
      <PricingOne carousel={carousel} />
      {!carousel && <BigImage />}
    </Layout>
  );
}
