import React, { useState, useEffect } from "react";
import { Post } from "../types";

const MassivePostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // 1000개의 더미 게시글 생성
    const dummyPosts = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      content: `This is the content of post ${i + 1}`,
    }));
    setPosts(dummyPosts);

    // 랜덤 스와핑 시작
    const intervalId = setInterval(() => {
      setPosts(prevPosts => {
        const newPosts = [...prevPosts];
        const index1 = Math.floor(Math.random() * newPosts.length);
        let index2 = Math.floor(Math.random() * newPosts.length);
        while (index2 === index1) {
          index2 = Math.floor(Math.random() * newPosts.length);
        }

        // Swap posts
        [newPosts[index1], newPosts[index2]] = [newPosts[index2], newPosts[index1]];

        // Modify titles
        newPosts[index1] = { ...newPosts[index1], title: `${newPosts[index1].title}` };
        newPosts[index2] = { ...newPosts[index2], title: `${newPosts[index2].title}` };

        return newPosts;
      });
    }, 10); // 10ms interval

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <h2>Massive Post List (1000 posts)</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MassivePostList;
