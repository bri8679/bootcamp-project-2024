import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-auto p-8 space-y-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800">Resume</h1>

      {/* Resume Download Link */}
      <Link
        href="Briana Kirkman Resume .pdf"
        download
        className="text-blue-600 underline hover:text-blue-800"
      >
        Download Resume
      </Link>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Education</h2>
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-medium"></h3>
          <p className="text-gray-600">
            California Polytechnic State University San Luis Obispo
          </p>
        </div>
      </section>

      {/* Course Work Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Course Work</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Systems Programming</li>
          <li>Data Structures</li>
          <li>Software Engineering</li>
          <li>Databases</li>
          <li>Object-Oriented Programming</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Experience</h2>
        <div className="border-l-4 border-blue-600 pl-4 space-y-2">
          <h3 className="text-xl font-medium">
            Girls Hackathon Participant and Winner
          </h3>
          <p className="text-sm text-gray-500">
            June 2021 | California State University San Marcos, San Marcos, CA
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              Developed a prototype on Code Studio utilizing JavaScript to
              provide teens with suitable summer occupations.
            </li>
            <li>
              Participated in a 24-hour hackathon focused on creating technology
              solutions catered towards teens.
            </li>
            <li>
              Collaborated with a team of mentors and peers to create a
              functional prototype.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Java</li>
          <li>Python</li>
          <li>C/C++</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Projects</h2>
        <div className="border-l-4 border-blue-600 pl-4 space-y-2">
          <h3 className="text-xl font-medium">
            Minimally Useful Shell (MUSH) | C
          </h3>
          <p className="text-sm text-gray-500">December 2023</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              Developed a simple shell (mush2) with interactive and batch
              processing capabilities, incorporating features such as command
              parsing, redirection, pipes, quoted strings, and backslash
              escapes.
            </li>
            <li>
              Successfully handled redirection of standard input and output, as
              well as pipes to connect the output of one command to the input of
              another.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
