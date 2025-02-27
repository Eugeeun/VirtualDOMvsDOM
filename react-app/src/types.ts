export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface Comment {
  id: number;
  postId: number;
  text: string;
}
