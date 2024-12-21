import Image from "next/image"; // Import Next.js optimized image component
import styles from "./blogPreview.module.css"; // Import CSS module
import Link from "next/link";

interface BlogPreviewProps {
  title: string;
  date: string; // Change to string type
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: BlogPreviewProps) {
  return (
    <div className={styles.previewContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <Image src={image} alt={imageAlt} width={200} height={300} />
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>Posted on: {date}</p>
        <Link href={`/blogs/${slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
