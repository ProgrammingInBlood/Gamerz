import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/Colors';
import ChatPreview from '../../components/messages/ChatPreview';

interface Chat {
  id: string;
  userId: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar?: string;
  isOnline: boolean;
}

export default function MessagesScreen() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      userId: 'GamerBuddy',
      lastMessage: 'Hey, want to play some games?',
      timestamp: new Date().toISOString(),
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: '2',
      userId: 'ProGamer123',
      lastMessage: 'GG!',
      timestamp: new Date().toISOString(),
      unreadCount: 0,
      isOnline: false,
    },
  ]);

  const handleChatPress = (chat: Chat) => {
    router.push({
      pathname: '/user/messages/[id]',
      params: {
        id: chat.id,
        username: chat.userId,
        isOnline: chat.isOnline.toString()
      }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatPreview
            chat={item}
            onPress={() => handleChatPress(item)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingVertical: 8,
  },
}); 