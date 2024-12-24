import React from "react";
import PostCard from "../Post/PostCard";
import styles from "./Feed.module.css";

const Feed = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding Malnutrition",
      author: "Dr. Aisha Bello",
      date: "2024-12-17",
      content: "A brief insight into malnutrition...",
    },
    {
      id: 2,
      title: "CMAM Program Success Stories",
      author: "Supervisor John Doe",
      date: "2024-12-16",
      content: "Highlighting the successes of the CMAM program...",
    },
  ];

  return (
    <div className={styles.feed}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Feed;
