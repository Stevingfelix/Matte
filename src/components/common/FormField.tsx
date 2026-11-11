"use client";

import { useState } from "react";

interface Props {
  id: string;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}

/** Labelled input / textarea (`form-one__control`) with the template's focus state */
export default function FormField({ id, label, name = id, type = "text", placeholder, required, textarea }: Props) {
  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const common = {
    id,
    name,
    placeholder,
    required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: (e: { target: { value: string } }) => setFilled(!!e.target.value),
  };
  return (
    <div className={`form-one__control form-one__control--full ${focus || filled ? "is-focus" : ""}`.trim()}>
      <label htmlFor={id}>{label}</label>
      {textarea ? <textarea {...common}></textarea> : <input type={type} {...common} />}
    </div>
  );
}
