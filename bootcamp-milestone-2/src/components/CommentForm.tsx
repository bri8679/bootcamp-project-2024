"use client";  

import { useState } from "react";

interface CommentFormProps {
  slug: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ slug }) => {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch(`/api/Blogs/${slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, comment }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Comment added successfully!");
      setComment(""); // Optionally clear the form after submit
      setUser("");  // Optionally clear the form after submit
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        name="comment"
        required
        placeholder="Add a comment..."
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        name="user"
        required
        placeholder="Your name"
        className="w-full mt-2 p-2 border rounded-md"
      />
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Submit Comment
      </button>
    </form>
  );
};

export default CommentForm;
