import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Testimonials from "../components/Testimonials";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa"; // Import icons

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g1rntwh", // Replace with Email.js Service ID
        "template_xgf000e", // Replace with Email.js Template ID
        form.current,
        "7k3-IbbePS7HgzR00" // Replace with Email.js Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitted(true); // Show success message
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send email. Try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full h-full bg-[#FFE6E4] pb-20 flex flex-col items-center"
    >
      <Testimonials />
      <div className="customer-details-section w-full max-w-lg flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-700 my-5">
          Enter Your Contact Details
        </h1>

        {submitted ? (
          <p className="text-green-600 font-medium">
            ✅ Thank you! We'll be in touch soon.
          </p>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full px-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full h-12 bg-white text-base text-gray-700 rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#830000] mb-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full h-12 bg-white text-base text-gray-700 rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#830000] mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Mail ID"
              required
              className="w-full h-12 bg-white text-base text-gray-700 rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#830000] mb-3"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full h-24 bg-white text-base text-gray-700 rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#830000] mb-3"
            ></textarea>
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <button
              type="submit"
              className="w-full h-12 bg-[#830000] text-white font-semibold rounded-xl hover:bg-red-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6 mt-10">
        <a
          href="https://www.instagram.com/your_instagram" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#830000] text-3xl hover:text-red-600 transition duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/your_facebook" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#830000] text-3xl hover:text-blue-600 transition duration-200"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/your_whatsapp_number" // Replace with actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#830000] text-3xl hover:text-green-600 transition duration-200"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Footer */}
      <div className="mt-6 text-gray-600 text-sm">
        © 2025 Nazrin's Makeover | All Rights Reserved
      </div>
    </div>
  );
};

export default Contact;
