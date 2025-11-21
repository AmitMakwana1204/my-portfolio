import React from "react";
import "./contact.css";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="mt-4 grid gap-3"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            name="name"
            placeholder="Name"
            className="p-3 rounded border"
          />

          <input
            name="email"
            placeholder="Email"
            className="p-3 rounded border"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="p-3 rounded border"
          ></textarea>

          <button
            type="submit"
            className="px-4 py-2 rounded bg-brand text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
