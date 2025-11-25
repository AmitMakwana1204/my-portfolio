
import React, { useState } from "react";
import "./contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message saved successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to save message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred.");
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded border"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded border"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded border"
          ></textarea>
          <button type="submit" className="px-4 py-2 rounded bg-brand text-white">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
