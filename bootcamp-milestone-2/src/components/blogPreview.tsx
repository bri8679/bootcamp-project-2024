import React from "react";
import Image from "next/image"; // Import Next.js optimized image component
import styles from "./blogPreview.module.css"; // Import CSS module
import { Blog } from "@/static/blogData"; // Import Blog type for props

export default function BlogPreview(props: Blog) {
  const { title, date, description, image, imageAlt } = props;

  return (
    <div className={styles.previewContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <Image src={image} alt={imageAlt} width={200} height={300} />
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>Posted on: {date}</p>
      </div>
    </div>
  );
}
