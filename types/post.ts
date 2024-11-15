export interface Post {
  id: string;
  userId: string;
  avatar: string;
  content: string;
  images?: string[];
  video?: string;
  gameReference?: GameReference;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
  isLiked: boolean;
  tags?: string[];
}

export interface GameReference {
  gameId: string;
  gameName: string;
  gameIcon?: string;
  achievement?: string;
  score?: number;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  avatar: string;
  content: string;
  likes: number;
  createdAt: Date;
  isLiked: boolean;
} 