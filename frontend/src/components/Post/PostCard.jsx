import React from "react";
import styles from "./PostCard.module.css";

const PostCard = ({ title, author, date, content }) => {
  return (
    <div className={styles.postCard}>
      <h3>{title}</h3>
      <p className={styles.meta}>
        By {author} on {new Date(date).toLocaleDateString()}
      </p>
      <p className={styles.preview}>{content}</p>
      <button className={styles.readMore}>Read More</button>
    </div>
  );
};

export default PostCard;
