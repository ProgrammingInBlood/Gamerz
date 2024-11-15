export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  status: MessageStatus;
  type: MessageType;
  replyTo?: string; // ID of the message being replied to
}

export type MessageStatus = 'sent' | 'delivered' | 'read';
export type MessageType = 'text' | 'image' | 'video' | 'game-invite';

export interface Chat {
  id: string;
  participants: string[]; // User IDs
  lastMessage: Message;
  unreadCount: number;
  updatedAt: Date;
  isGroupChat: boolean;
  groupName?: string;
  groupAvatar?: string;
}

export interface ChatPreviewData {
  id: string;
  userId: string;
  username: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
}

export interface MessageBubbleData {
  id: string;
  content: string;
  isSender: boolean;
  timestamp: Date;
  status: MessageStatus;
} 