export interface ForumThread {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  replies: ForumReply[];
  category: string;
  views: number;
}

export interface ForumReply {
  id: number;
  content: string;
  author: string;
  isLawyer: boolean;
  date: string;
  likes: number;
}