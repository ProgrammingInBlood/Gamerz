import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
}

export default function Post({ post, onLike, onComment }: PostProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/40' }} 
          style={styles.avatar} 
        />
        <Text style={styles.username}>@{post.userId}</Text>
      </View>
      
      <Text style={styles.content}>{post.content}</Text>
      
      {post.images && post.images.length > 0 && (
        <Image 
          source={{ uri: post.images[0] }} 
          style={styles.postImage} 
        />
      )}
      
      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => onLike(post.id)}
        >
          <FontAwesome5 name="heart" size={16} color={Colors.textSecondary} />
          <Text style={styles.actionText}>{post.likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => onComment(post.id)}
        >
          <FontAwesome5 name="comment" size={16} color={Colors.textSecondary} />
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: Colors.text,
    fontWeight: 'bold',
  },
  content: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },
  actionText: {
    color: Colors.text,
    fontWeight: 'bold',
    marginLeft: 5,
  },
}); 