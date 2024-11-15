import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Notification } from '../../types';

interface NotificationItemProps {
  notification: Notification;
  onPress: (notification: Notification) => void;
}

const NotificationItem = ({ notification, onPress }: NotificationItemProps) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'like': return 'heart';
      case 'comment': return 'comment';
      case 'follow': return 'user-plus';
      case 'message': return 'envelope';
      default: return 'bell';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        !notification.read && styles.unread
      ]}
      onPress={() => onPress(notification)}
    >
      <View style={styles.iconContainer}>
        <FontAwesome5
          name={getIcon()}
          size={20}
          color={Colors.primary}
        />
      </View>
      <Text style={styles.notificationText}>{notification.message}</Text>
    </TouchableOpacity>
  );
};

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      userId: 'GamerPro',
      message: 'GamerPro liked your story "My First Elden Ring Boss Fight"',
      type: 'like',
      read: false,
      createdAt: new Date(),
    },
    {
      id: '2',
      userId: 'RPGMaster',
      message: 'RPGMaster commented on your post: "That strategy is brilliant!"',
      type: 'comment',
      read: true,
      createdAt: new Date(Date.now() - 3600000), // 1 hour ago
    },
    {
      id: '3',
      userId: 'QuestSeeker',
      message: 'QuestSeeker started following you',
      type: 'follow',
      read: false,
      createdAt: new Date(Date.now() - 7200000), // 2 hours ago
    },
    {
      id: '4',
      userId: 'DragonSlayer',
      message: 'DragonSlayer sent you a message',
      type: 'message',
      read: true,
      createdAt: new Date(Date.now() - 86400000), // 1 day ago
    },
    {
      id: '5',
      userId: 'PixelWarrior',
      message: 'PixelWarrior mentioned you in a comment: "You should team up with @user!"',
      type: 'comment',
      read: false,
      createdAt: new Date(Date.now() - 172800000), // 2 days ago
    },
    {
      id: '6',
      userId: 'GameMaster',
      message: 'GameMaster shared your post about "Top 10 Gaming Tips"',
      type: 'like',
      read: true,
      createdAt: new Date(Date.now() - 259200000), // 3 days ago
    }
  ]);

  const handlePress = (notification: Notification) => {
    // Implement notification press functionality
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            notification={item}
            onPress={handlePress}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  notificationItem: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  unread: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  notificationText: {
    color: Colors.text,
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
}); 