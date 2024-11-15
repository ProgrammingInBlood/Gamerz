import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import PostCard from '../../components/feed/PostCard';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import { Post } from '../../types';

export default function FeedScreen() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      userId: 'johndoe',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content: 'Beautiful sunset today! 🌅 #nature #photography #sunset',
      images: [
        'https://images.unsplash.com/photo-1695653420644-ab3d6a039d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      ],
      likes: 42,
      comments: 5,
      shares: 0,
      createdAt: new Date(),
      isLiked: false,
    },
    {
      id: '2',
      userId: 'janedoe',
      avatar: 'https://i.pravatar.cc/150?img=5',
      content: 'Coding all day! 💻 #programming #reactnative #typescript',
      images: [],
      likes: 23,
      comments: 3,
      shares: 0,
      createdAt: new Date(),
      isLiked: true,
    },
    {
      id: '3',
      userId: 'StreamQueen',
      content:
        'Had an amazing stream today! Thanks to everyone who joined! Here are some highlights 🎥 #streaming #gaming #community',
      likes: 89,
      comments: 15,
      shares: 5,
      createdAt: new Date(),
      isLiked: false,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      images: [
        'https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?w=800',
        'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800',
        'https://images.unsplash.com/photo-1542751110-97427bbecf23?w=800',
      ],
    },
    {
      id: '4',
      userId: 'CosplayMaster',
      content: 'My latest gaming-inspired cosplay! What do you think? 🎭',
      likes: 324,
      comments: 45,
      shares: 28,
      createdAt: new Date(),
      isLiked: false,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      images: [
        'https://images.unsplash.com/photo-1563802560775-445d06537a8d?w=800',
        'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800',
      ],
    },
    {
      id: '5',
      userId: 'GameDev',
      content:
        "Working on a new indie game project! Here's a sneak peek of the concept art 🎨",
      likes: 267,
      comments: 34,
      shares: 15,
      createdAt: new Date(),
      isLiked: true,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      images: [
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
      ],
    },
    {
      id: '6',
      userId: 'RetroGamer',
      content:
        'Just a simple appreciation post for classic gaming. No screenshots needed, just pure nostalgia! 👾',
      likes: 178,
      comments: 42,
      shares: 8,
      createdAt: new Date(),
      isLiked: false,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      id: '7',
      userId: 'PCMasterRace',
      content: 'Finally completed my dream setup! 🖥️✨',
      likes: 423,
      comments: 56,
      shares: 32,
      createdAt: new Date(),
      isLiked: false,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      images: [
        'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800',
        'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800',
      ],
    },
  ]);

  const handleNewPost = () => {
    // Handle new post creation
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostCard post={item} onLike={() => {}} onComment={() => {}} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
      <FloatingActionButton onPress={handleNewPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
