import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  // Use useQuery hook to fetch posts
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

