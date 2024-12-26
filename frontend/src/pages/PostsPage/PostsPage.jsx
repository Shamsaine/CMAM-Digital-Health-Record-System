import React from 'react';
import PostForm from '../../components/PostForm/PostForm';
import PostList from '../../components/PostList/PostList';
import styles from './PostsPage.module.css';

const PostsPage = () => {
  return (
    <div className={styles.postsPage}>
      <h1>Research and Articles</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default PostsPage;
