"use client";

import { useState, type FormEvent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormField from "../../components/common/FormField";
import PageHeader from "../../components/common/PageHeader";
import PikizButton from "../../components/common/PikizButton";
import Layout from "../../components/layout/Layout";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <Layout header={{ variant: "one" }} footer="one" footerCta>
      <PageHeader title="Contact" />
      <section className="contact-info">
        <Container>
          <Row className="gutter-y-30">
            <Col lg={7}>
              <div className="contact-info__map wow bounceInLeft" data-wow-delay="300ms">
                <div className="google-map google-map__contact">
                  <iframe title="template google map" src={MAP_SRC} className="map__contact" allowFullScreen></iframe>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 1 }}>
              <div className="contact-info__content-box">
                <div className="contact-info__item wow fadeInRight" data-wow-delay="100ms">
                  <div className="contact-info__icon">
                    <i className="icon-pin-400"></i>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__title">Our Address</h3>
                    <p className="contact-info__text">
                      14 Wall St #15,10011 area <br /> New York
                    </p>
                  </div>
                </div>
                <div className="contact-info__item wow fadeInRight" data-wow-delay="300ms">
                  <div className="contact-info__icon">
                    <i className="icon-phone-11"></i>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__title">Have any question</h3>
                    <p className="contact-info__call"><a href="tel:+88-11-124-454">+ 88 11 124 454</a></p>
                    <p className="contact-info__call"><span>Office :</span> <a href="tel:+88-11-124-454">46 77 344 666</a></p>
                    <p className="contact-info__call"><span>Email : </span> <a href="mailto:support@gmail.com">support@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-area">
        <Container>
          <div className="sec-title">
            <h4 className="sec-title__subtitle bw-split-text">We’re here to assist you with any questions or inquiries.</h4>
            <h2 className="sec-title__title bw-spilt-title-one" data-speed="1">
              Reach Out Via Message ! How <br /> Can We Help?
            </h2>
          </div>
          <div className="contact-area__form-box wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="700ms">
            <form className="contact-area__form contact-form-validated form-one" onSubmit={onSubmit}>
              <div className="form-one__group">
                <FormField id="name" label="Name*" placeholder="Type your name" required />
                <FormField id="email" label="Email*" type="email" placeholder="Email Address" required />
                <FormField id="phone" label="Phone" placeholder="Phone" />
                <FormField id="massage" name="message" label="Message" placeholder="Type Message Here " textarea required />
                <div className="form-one__control form-one__control--full">
                  <PikizButton type="submit" label="Send Message" />
                </div>
              </div>
            </form>
            {sent && <p className="mt-3">Thank you! Your message has been sent.</p>}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
