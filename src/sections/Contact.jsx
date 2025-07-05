import React, { useState } from "react";
import toast from "react-hot-toast";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSex_1BQJ3x9_IB8-VZ4xnYn_Nx1AkHTQPDBq9tZM9rUSK9jrQ/formResponse";

const ENTRY_NAME = "entry.557416940";
const ENTRY_EMAIL = "entry.546168234";
const ENTRY_MESSAGE = "entry.1644372783";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    if (!form.name || !form.email || !form.message) {
      e.preventDefault();
      toast.error("All fields are required!");
    } else {
      toast.success("Message sent successfully!");
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6" data-aos="zoom-in-up">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-8">
          Let's connect! Fill the form or email me directly at{" "}
          <a
            href="mailto:sanjeevksharma495@gmail.com"
            className="text-blue-400 underline"
          >
            sanjeevksharma495@gmail.com
          </a>
        </p>

        <form
          action={GOOGLE_FORM_ACTION}
          method="POST"
          target="_blank"
          onSubmit={handleSubmit}
          className="space-y-6 max-w-md mx-auto"
        >
          {/* Visible fields for user input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Hidden inputs for Google Form submission */}
          <input type="hidden" name={ENTRY_NAME} value={form.name} />
          <input type="hidden" name={ENTRY_EMAIL} value={form.email} />
          <input type="hidden" name={ENTRY_MESSAGE} value={form.message} />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-medium transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
