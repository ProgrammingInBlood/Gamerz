import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

interface MessageBubbleProps {
  message: {
    id: string;
    content: string;
    isSender: boolean;
    timestamp: Date;
  };
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <View style={[
      styles.container,
      message.isSender ? styles.senderContainer : styles.receiverContainer
    ]}>
      <Text style={[
        styles.messageText,
        message.isSender ? styles.senderText : styles.receiverText
      ]}>
        {message.content}
      </Text>
      <Text style={styles.timestamp}>
        {new Date(message.timestamp).toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 20,
  },
  senderContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  receiverContainer: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.card,
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 4,
  },
  senderText: {
    color: Colors.text,
  },
  receiverText: {
    color: Colors.text,
  },
  timestamp: {
    fontSize: 11,
    color: Colors.textSecondary,
    alignSelf: 'flex-end',
  },
}); 