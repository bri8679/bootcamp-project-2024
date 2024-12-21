import Image from "next/image";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json(); // Return the blog data as JSON
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}

export default async function BlogPage({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        Published on {new Date(blog.date).toLocaleDateString()}
      </p>
      <p className="text-lg mb-4">{blog.description}</p>
      <Image
        src={blog.image}
        alt={blog.imageAlt}
        className="w-full h-auto mb-6 rounded-lg"
      />
      <div className="text-lg leading-7">{blog.content}</div>
    </div>
  );
}
