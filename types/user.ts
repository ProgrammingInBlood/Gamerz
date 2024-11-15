export type Activity = {
  id: string;
  type: 'post' | 'achievement' | 'comment';
  content: string;
  timestamp: string;
};

export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  bio: string;
  favoriteGames: string[];
  followers: number;
  following: number;
  isOnline: boolean;
  posts: number;
  recentActivity: Activity[];
} 