"use client";

import type { Testimonial } from "../../data/content";

/** Quote card used inside the testimonials carousel */
export default function TestimonialCard({ name, designation, text }: Testimonial) {
  return (
    <div className="testimonials-one__item cursor-text" data-cursor-text="< >">
      <div className="testimonials-one__item__top">
        <div className="testimonials-one__item__author">
          <h3 className="testimonials-one__item__name">{name}</h3>
          <p className="testimonials-one__item__designation">{designation}</p>
        </div>
        <div className="quite">
          <i className="icon-quite2"></i>
        </div>
      </div>
      <p className="testimonials-one__item__text">{text}</p>
    </div>
  );
}
