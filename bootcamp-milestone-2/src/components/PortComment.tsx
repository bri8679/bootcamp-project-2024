"use client";

import { useState } from "react";

export default function PortComment() {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const commentData = {
      user,
      comment,
    };

    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Comment added successfully!");
        setUser("");
        setComment("");
      } else {
        setMessage(data.error || "Failed to add comment.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to add comment.");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className="p-2 w-full border rounded-md"
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="p-2 w-full border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit Comment
        </button>
      </form>

      {message && <p className="text-sm mt-2 text-center">{message}</p>}
    </div>
  );
}
