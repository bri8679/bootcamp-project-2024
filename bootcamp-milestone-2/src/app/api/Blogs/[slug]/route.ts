import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

// GET request to fetch a blog by its slug
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  await connectDB(); // function from db.ts before
  const slug = (await params).slug;

  console.log("Received slug:", slug);
  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json(`Blog with slug '${slug}' not found.`, {
      status: 404,
    });
  }
}

// POST request to add a comment to a blog
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const slug = (await params).slug;

    // Parse the request body to get the comment data
    const body = await req.json();

    // Validate the body
    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: "User and comment are required." },
        { status: 400 }
      );
    }

    // Find the blog by slug
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    // Create a new comment
    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(), // Add the current timestamp
    };

    // Add the comment to the blog's comments array
    blog.comments.push(newComment);

    // Save the updated blog with the new comment
    await blog.save();

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
