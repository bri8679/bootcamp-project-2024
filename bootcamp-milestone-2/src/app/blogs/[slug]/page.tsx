import Image from "next/image";
import { IComment } from "@/database/blogSchema";
import { Blog } from "@/database/blogSchema";
import CommentForm from "@/components/CommentForm";

type Params = Promise<{ slug: string }>;

async function getBlog(slug: string): Promise<Blog | null> {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  try {
    const res = await fetch(`${baseUrl}/api/Blogs/${slug}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function BlogPage(props: { params: Params }) {
  const { slug } = await props.params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-4 text-center">
          Published on {new Date(blog.date).toLocaleDateString()}
        </p>
        <div className="flex justify-center mb-6">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            height={300}
            width={300}
            className="rounded-lg bg-white shadow-md"
          />
        </div>
        <div className="text-lg leading-7 text-center">{blog.content}</div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment: IComment, index: number) => (
              <div key={index} className="border-t pt-4">
                <p><strong>{comment.user}</strong>: {comment.comment}</p>
                <p className="text-gray-500 text-sm">{new Date(comment.time).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        {/* Use the dynamically imported CommentForm component */}
        <CommentForm slug={slug} />
      </div>
    </div>
  );
}
