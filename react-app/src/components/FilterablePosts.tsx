import React, { useState, useMemo } from "react";
import { Post } from "../types";

const FilterablePosts: React.FC = () => {
  const [posts] = useState<Post[]>(
    Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      content: `Content ${i + 1}`,
    }))
  );
  const [filter, setFilter] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(
      post =>
        post.title.toLowerCase().includes(filter.toLowerCase()) ||
        post.content.toLowerCase().includes(filter.toLowerCase())
    );
  }, [posts, filter]);

  return (
    <div style={{ flex: 1 }}>
      <h2>Filterable Posts</h2>
      <input
        type='text'
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder='Filter posts'
      />
      {filteredPosts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterablePosts;
