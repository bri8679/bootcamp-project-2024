"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("All fields are required.");
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      console.log("Email sent successfully:", response); // Log the response for debugging
      setStatus("Message sent successfully!");
      // Optionally reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      console.error("Error sending email:", error); // Log the actual error
      setStatus("Failed to send message.");

      // Log the error object directly to see what's being thrown
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      } else {
        console.error("Unknown error occurred:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="page-title text-3xl text-center pt-8 font-serif mb-4">
        Contact Information
      </h1>
      <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="block">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="block">Message:</label>
        <textarea
          id="Message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="w-full p-2 bg-blue-300 text-white rounded hover:bg-blue-400"
        />
      </form>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
