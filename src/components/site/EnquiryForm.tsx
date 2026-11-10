import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" autoComplete="name" required placeholder="Full name" />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required placeholder="Your number" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Arrival
          <input name="arrival" type="date" />
        </label>
        <label>
          Departure
          <input name="departure" type="date" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={3} placeholder="Tell us a little about your stay" />
      </label>
      <Button type="submit" size="lg" className="submit-enquiry">
        Send an enquiry <ArrowUpRight aria-hidden="true" />
      </Button>
      {submitted ? (
        <p className="form-note" role="status">
          This preview form is not connected yet, so no message was sent. Hotel contact details can be added when available.
        </p>
      ) : (
        <p className="form-note">Your enquiry form will be connected when the hotel contact details are ready.</p>
      )}
    </form>
  );
}