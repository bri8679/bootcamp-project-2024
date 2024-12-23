// pages/api/contact.ts (or .js)

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Perform basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // You can log or perform some other action here, like saving to a database.
    console.log({ name, email, message });

    // Return a success response
    return res.status(200).json({ success: "Message received." });
  } else {
    // Handle unsupported HTTP methods
    return res.status(405).json({ error: "Method not allowed." });
  }
}
