"use client";

import type { FormEvent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import PikizButton from "../../components/common/PikizButton";
import SmartLink from "../../components/common/SmartLink";
import Layout from "../../components/layout/Layout";
import { ROUTES } from "../../data/routes";

const prevent = (e: FormEvent) => e.preventDefault();

export default function Login() {
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader title="login" />
      <section className="login-page">
        <Container>
          <div className="login-page__info">
            <p>
              We have a Demo Account Setup. <span>Username:</span> <SmartLink to={ROUTES.login}>demo</SmartLink> and <span> Password:</span>{" "}
              <SmartLink to={ROUTES.login}>demo</SmartLink>
            </p>
          </div>
          <div className="login-page__wrap">
            <Row>
              <Col lg={6} className="wow fadeInUp animated" data-wow-delay="300ms">
                <form className="login-page__form" onSubmit={prevent}>
                  <h3 className="login-page__wrap__title">Login</h3>
                  <div className="login-page__form-input-box">
                    <input type="email" placeholder="Username of email *" />
                  </div>
                  <div className="login-page__form-input-box">
                    <input type="password" placeholder="Password *" />
                  </div>
                  <div className="login-page__checked-box">
                    <div className="login-page__checked">
                      <input type="checkbox" name="save-data" id="save-data" />
                      <label htmlFor="save-data"><span></span>Remember Me?</label>
                    </div>
                    <div className="login-page__form-forgot-password">
                      <SmartLink to={ROUTES.login}>Forgot your Passowrd?</SmartLink>
                    </div>
                  </div>
                  <div className="login-page__form-btn-box">
                    <PikizButton type="submit" label="Login" />
                  </div>
                </form>
              </Col>
              <Col lg={6} className="wow fadeInUp animated" data-wow-delay="400ms">
                <form className="login-page__form login-page__form-right" onSubmit={prevent}>
                  <h3 className="login-page__wrap__title">Register</h3>
                  <div className="login-page__form-input-box">
                    <input type="email" placeholder="Email address" />
                  </div>
                  <div className="login-page__form-input-box">
                    <input type="password" placeholder="Password" />
                  </div>
                  <div className="login-page__checked-box">
                    <input type="checkbox" name="accept-policy" id="accept-policy" />
                    <label htmlFor="accept-policy"><span></span>I accept company privacy policy.</label>
                  </div>
                  <div className="login-page__form-btn-box">
                    <PikizButton type="submit" label="Register" />
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <CtaArea />
    </Layout>
  );
}
