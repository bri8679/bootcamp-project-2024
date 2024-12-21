import React from "react";
import Image from "next/image";
import connectDB from "@/database/db";
import Project from "@/database/portfolioSchema";

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
          </div>
        ))}
      </div>
    </div>
  );
}
