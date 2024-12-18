import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="page-title text-3xl text-center pt-8 font-serif mb-4">
        Contact Information
      </h1>
      <form id="contact-form" className="space-y-4">
        <label className="block">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="block">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="block">Message:</label>
        <textarea
          id="Message"
          name="message"
          required
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="w-full p-2 bg-blue-300 text-white rounded hover:bg-blue-400"
        />
      </form>
    </div>
  );
}
