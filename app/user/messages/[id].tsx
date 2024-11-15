import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import MessageBubble from '@/components/messages/MessageBubble';
import MessageInput from '@/components/messages/MessageInput';
import Avatar from '@/components/ui/Avatar';
import { Ionicons } from '@expo/vector-icons';
import { Menu } from '@/components/ui/Menu';

interface Message {
  id: string;
  content: string;
  isSender: boolean;
  timestamp: Date;
}

// Custom header component
function ConversationHeader({
  username,
  isOnline,
}: {
  username: string;
  isOnline: boolean;
}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/messages')}
      >
        <Ionicons name='chevron-back' size={24} color={Colors.text} />
      </TouchableOpacity>

      <View style={styles.headerContent}>
        <Avatar size={32} />
        <View style={styles.headerInfo}>
          <Text style={styles.headerUsername}>{username}</Text>
          <Text
            style={[
              styles.headerStatus,
              { color: isOnline ? Colors.success : Colors.textSecondary },
            ]}
          >
            {isOnline ? 'Online' : 'Offline'}
          </Text>
        </View>
      </View>

      <Menu
        trigger={
          <Ionicons name='ellipsis-vertical' size={20} color={Colors.text} />
        }
        items={[
          {
            label: 'Report User',
            onPress: () => {
              /* Handle report */
            },
            icon: 'flag-outline',
          },
          {
            label: 'Block User',
            onPress: () => {
              /* Handle block */
            },
            icon: 'ban-outline',
            destructive: true,
          },
        ]}
      />
    </View>
  );
}

export default function ConversationScreen() {
  const { id, username } = useLocalSearchParams();
  const [isOnline, setIsOnline] = useState(true); // This would come from your backend
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hey, want to play some games?',
      isSender: false,
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: '2',
      content: 'Sure! What do you want to play?',
      isSender: true,
      timestamp: new Date(Date.now() - 3000000),
    },
  ]);

  const handleSend = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isSender: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <>
      <ConversationHeader username={username as string} isOnline={isOnline} />
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <MessageBubble message={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
          inverted={false}
        />
        <MessageInput onSend={handleSend} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  messagesList: {
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.card,
  },
  backButton: {
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerInfo: {
    marginLeft: 12,
  },
  headerUsername: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  headerStatus: {
    fontSize: 12,
    marginTop: 2,
  },
  menuButton: {
    padding: 8,
    marginLeft: 12,
  },
});
