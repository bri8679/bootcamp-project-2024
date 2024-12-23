import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/portfolioSchema";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const body = await req.json();

    // Validate the request body
    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: "User and comment are required." },
        { status: 400 }
      );
    }

    // Find the portfolio project
    const portfolio = await Project.findOne({});
    if (!portfolio) {
      return NextResponse.json(
        { error: "Portfolio project not found." },
        { status: 404 }
      );
    }

    // Create a new comment
    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(), // Add the current timestamp
    };

    // Add the comment to the portfolio project's comments array
    portfolio.comments.push(newComment);

    // Save the updated portfolio project
    await portfolio.save();

    return NextResponse.json(
      { message: "Comment added successfully.", comment: newComment },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add comment." },
      { status: 500 }
    );
  }
}
