"use client";

import { Container } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import { img } from "../../utils";

export default function NotFound() {
  return (
    <Layout header={{ variant: "one" }} footer="one" footerCta>
      <section className="error-404">
        <Container>
          <div className="error-404__title">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
          <h3 className="error-404__subtitle">Sorry! Page not found</h3>
          <p className="error-404__text">
            We're sorry, the page you were looking for isn't found here. The link you <br /> followed may either be broken or no longer exists. Please try again
          </p>
        </Container>
        <div className="error-404__shape">
          <img src={img("shapes/page-header-1-1.png")} alt="image" />
        </div>
      </section>
    </Layout>
  );
}
