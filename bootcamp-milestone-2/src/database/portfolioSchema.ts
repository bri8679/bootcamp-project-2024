import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
  title: string;
  description: string; // for preview
  image: string; // url for string in public
  imageAlt: string; // alt for image
  comments: IComment[];
};
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// mongoose schema
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
    },
  ],
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
