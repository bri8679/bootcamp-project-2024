import React from "react";
import Image from "next/image";
import connectDB from "@/database/db";
import Project from "@/database/portfolioSchema";
import { IComment } from "@/database/portfolioSchema";
import CommentSection from "@/components/PortComment";

async function getProjects() {
  await connectDB();

  try {
    // query for projects
    const projects = await Project.find().orFail();
    // send a response
    return projects;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export const revalidate = 0; // Forces fresh fetch on every request
export default async function Home() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No projects just yet, shes working.
      </p>
    );
  }

  return (
    <div className="project text-center">
      <h1 className="text-3xl pt-8 font-serif">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project: Project, index: number) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-48 object-cover rounded-md"
              width={400}
              height={200}
            />
            <h2 className="text-xl font-bold text-gray-800 mt-4">
              {project.title}
            </h2>
            <p className="text-gray-600 mt-2">{project.description}</p>

            {/* Comments Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Comments</h3>
              <div className="mt-4">
                {project.comments && project.comments.length > 0 ? (
                  project.comments.map((comment: IComment, index: number) => (
                    <div key={index} className="border-t pt-2">
                      <p className="text-sm font-semibold">{comment.user}</p>
                      <p className="text-sm text-gray-600">{comment.comment}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(comment.time).toLocaleString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
              </div>
              <CommentSection />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
