export interface Notification {
    id: string;
    userId: string;
    message: string;
    type: 'like' | 'comment' | 'follow' | 'message';
    read: boolean;
    createdAt: Date;
  } 