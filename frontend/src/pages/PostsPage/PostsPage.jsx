import React, { useState } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import PostList from '../../components/PostList/PostList';
import styles from './PostsPage.module.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={styles.postsPage}>
      <h1>Research and Articles</h1>
      <PostForm onPostCreated={handlePostCreated} />
      <PostList posts={posts} />
    </div>
  );
};

export default PostsPage;
