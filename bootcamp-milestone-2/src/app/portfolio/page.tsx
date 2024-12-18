import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="project text-center">
      <h1 className="text-3xl pt-8">Portfolio</h1>
      <Image
        src="/images/Screenshot.png"
        alt="website"
        width="500"
        height="350"
        className="mx-auto pt-2"
      />
      <div className="project-details mx-auto max-w-lg">
        <p className="project-name text-xl font-bold">
          Briana Kirkman&apos;s Personal Website
        </p>
        <p className="project-description">
          This is my personal website that gives insight about my experience
          with coding, ways to contact me, and my resume.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Learn More
        </Link>
      </div>
    </div>
  );
}
