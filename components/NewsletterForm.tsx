"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thanks for joining the collective.");
    event.currentTarget.reset();
  }

  return (
    <form className="newsletterForm" onSubmit={handleSubmit}>
      <label className="srOnly" htmlFor="email">Email address</label>
      <input id="email" name="email" type="email" placeholder="Email address" required />
      <button type="submit">Join</button>
      {message ? <p className="formMessage">{message}</p> : null}
    </form>
  );
}
