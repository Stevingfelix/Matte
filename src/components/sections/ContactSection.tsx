"use client";

import { useState, type FormEvent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormField from "../common/FormField";
import PikizButton from "../common/PikizButton";
import { useLayout } from "../layout/LayoutContext";

interface Props {
  id?: string;
}

/** Inline lead-capture / contact form section using the template's contact-area styles */
export default function ContactSection({ id }: Props) {
  const { brand } = useLayout();
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    form.reset();
    setSubmittedName(name || "there");
  };

  return (
    <section className="contact-area" id={id}>
      <Container>
        <div className="sec-title">
          <h4 className="sec-title__subtitle bw-split-text">
            We’re here to help {brand.name} partners turn ideas into reality.
          </h4>
          <h2 className="sec-title__title bw-spilt-title-one" data-speed="1">
            Start a Conversation <br /> With {brand.name}
          </h2>
          <Row className="justify-content-center mt-4 mb-5 g-3">
            <Col xs="auto">
              <a href={`mailto:${brand.email}`} className="text-dark fw-medium">
                <i className="fas fa-envelope me-2"></i>
                {brand.email}
              </a>
            </Col>
            <Col xs="auto">
              <a href={`tel:${brand.phone}`} className="text-dark fw-medium">
                <i className="fas fa-phone-alt me-2"></i>
                {brand.displayPhone}
              </a>
            </Col>
            <Col xs="auto">
              <span className="text-muted fw-medium">
                <i className="fas fa-map-marker-alt me-2"></i>
                {brand.address}
              </span>
            </Col>
          </Row>
        </div>
        <div className="contact-area__form-box wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="200ms">
          <form className="contact-area__form contact-form-validated form-one" onSubmit={onSubmit}>
            <div className="form-one__group">
              <FormField id="contact-name" name="name" label="Name*" placeholder="Type your name" required />
              <FormField id="contact-email" name="email" label="Email*" type="email" placeholder="Email Address" required />
              <FormField id="contact-phone" name="phone" label="Phone" placeholder="Phone (optional)" />
              <FormField id="contact-message" name="message" label="Project Brief*" placeholder="Tell us about your project, goals, and timeline" textarea required />
              <div className="form-one__control form-one__control--full">
                <PikizButton type="submit" label="Send Message" />
              </div>
            </div>
          </form>
          {submittedName && (
            <p className="mt-4 text-center fw-semibold text-success">
              Thanks, {submittedName}! {brand.name} has received your inquiry and will reply within one business day.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

