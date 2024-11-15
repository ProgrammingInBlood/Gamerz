import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import Avatar from '../ui/Avatar';
import OnlineStatus from '../ui/OnlineStatus';

interface ChatPreviewProps {
  chat: {
    id: string;
    userId: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    avatar?: string;
    isOnline: boolean;
  };
  onPress: (chatId: string) => void;
}

export default function ChatPreview({ chat, onPress }: ChatPreviewProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(chat.id)}
    >
      <View style={styles.avatarContainer}>
        <Avatar url={chat.avatar} size={50} />
        <OnlineStatus 
          isOnline={chat.isOnline} 
          style={styles.onlineStatus}
        />
      </View>
      
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.username}>{chat.userId}</Text>
          <Text style={styles.timestamp}>
            {new Date(chat.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Text>
        </View>
        <Text style={styles.message} numberOfLines={1}>
          {chat.lastMessage}
        </Text>
      </View>

      {chat.unreadCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {chat.unreadCount}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.background,
  },
  avatarContainer: {
    position: 'relative',
  },
  onlineStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  timestamp: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
  message: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  badge: {
    backgroundColor: Colors.primary,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    marginLeft: 8,
  },
  badgeText: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: 'bold',
  },
}); 