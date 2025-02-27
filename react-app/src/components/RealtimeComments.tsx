import React, { useState, useEffect } from "react";
import { Comment } from "../types";

const RealtimeComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // 실시간 댓글 시뮬레이션
    const interval = setInterval(() => {
      const randomComment: Comment = {
        id: Date.now(),
        postId: 1, // 예시로 하나의 포스트에 대한 댓글만 표시
        text: `Random comment ${Math.random().toString(36).substring(7)}`,
      };
      setComments(prevComments => [...prevComments, randomComment]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        postId: 1,
        text: newComment,
      };
      setComments(prevComments => [...prevComments, comment]);
      setNewComment("");
    }
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Realtime Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          placeholder='Add a comment'
        />
        <button type='submit'>Submit</button>
      </form>
      {comments.map(comment => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
};

export default RealtimeComments;
