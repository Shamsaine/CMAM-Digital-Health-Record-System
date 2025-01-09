import React from 'react';
import PostCard from '../PostCard/PostCard';
import styles from './PostList.module.css';

const PostList = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
