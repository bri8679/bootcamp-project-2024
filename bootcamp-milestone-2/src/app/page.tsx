import Image from "next/image";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default async function Home() {
  // Fetch the blogs before rendering the page
  const blogs = await getBlogs();
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
      {blogs ? (
        blogs.map((blog) => {
          const formattedDate = new Date(blog.date).toLocaleDateString(); // Format the date

          return (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              date={formattedDate} // Use the formatted date
              description={blog.description}
              image={blog.image}
              imageAlt={blog.imageAlt}
              slug={blog.slug}
            />
          );
        })
      ) : (
        <p className="text-center">No blogs available.</p> // Display message if no blogs found
      )}
    </div>
  );
}
