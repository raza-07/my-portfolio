"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappPhone = "923044573944"; // International format without '+'
    const composedMessage = `Hi Ali Raza,\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n\nSent from your portfolio website.`;
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(composedMessage)}`;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(composedMessage);
        toast.success("Message copied. Opening WhatsApp…");
      } else {
        toast("Opening WhatsApp. Copy your message manually if needed.");
      }
    } catch (error) {
      toast("Opening WhatsApp. Copy your message manually if needed.");
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-blue-400 rounded-xl p-6 shadow-lg w-full max-w-md"
    >
      <h3 className="text-xl font-semibold text-blue-400 mb-4">
        Contact / Hire Me
      </h3>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 bg-gray-800 text-white border border-blue-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 bg-gray-800 text-white border border-blue-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full mb-4 px-4 py-2 bg-gray-800 text-white border border-blue-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
