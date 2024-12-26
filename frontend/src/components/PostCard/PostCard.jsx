import React from 'react';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className={styles.author}>By: {post.author_name}</p>
      <p className={styles.date}>{new Date(post.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default PostCard;
