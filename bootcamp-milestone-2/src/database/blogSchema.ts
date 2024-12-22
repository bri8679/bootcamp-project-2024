import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
export type Blog = {
  title: string;
  date: Date;
  description: string; // for preview
  image: string; // url for string in public
  imageAlt: string; // alt for image
  slug: string;
  content: string; // text content for individual blog page
  comments: IComment[];
};

// Mongoose schema for blogs
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
    },
  ],
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
