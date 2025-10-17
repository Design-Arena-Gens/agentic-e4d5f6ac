'use client';

import { useState } from 'react';

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email');
    if (!email) {
      return;
    }
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="lead-capture">
      <form className="lead-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">
          Enter your email to claim the reward
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your best email"
          required
        />
        <button type="submit">Claim My $100 Gift Card</button>
      </form>
      <p className={`form-helper ${submitted ? 'success' : ''}`}>
        {submitted
          ? 'Sweet! Check your inbox for the next steps to unlock your reward.'
          : 'Takes less than 5 minutes. No purchase required to qualify.'}
      </p>
    </div>
  );
}
