import Image from "next/image";
import blogs from "@/static/blogData";
import BlogPreview from "@/components/blogPreview";

export default function Home() {
  return (
    <div>
      <h1 className="page-title text-3xl text-center pt-8">About Me</h1>
      <div className="about">
        <div className="about-image flex justify-center pt-2">
          <Image
            src="/images/bri.JPG"
            alt="Briana Kirkman"
            width="300"
            height="200"
          />
        </div>
        <div className="about-text font-serif text-center flex justify-center pt-2">
          <div className="max-w-lg">
            <p>
              My name is Briana Kirkman and I am a
              <strong> 3rd year computer science</strong> student at Cal Poly
              Slo. I have participated in a few hackathons and love to learn
              about programming. In addition to programming, I am also really
              involved in the performing arts.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-extrabold text-center py-4 shadow-lg">
        Latest Blogs
      </h1>
      {blogs.map((blog) => (
        <BlogPreview
          key={blog.slug}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
        />
      ))}
    </div>
  );
}
