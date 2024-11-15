import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import AllResults from '@/components/search/AllResults';
import UserResult from '@/components/search/UserResult';
import PostResult from '@/components/search/PostResult';
import HashtagResult from '@/components/search/HashtagResult';
import { Ionicons } from '@expo/vector-icons';

const DUMMY_USERS = [
  {
    id: '1',
    username: 'johndoe',
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    followers: 1200,
  },
  {
    id: '2',
    username: 'janedoe',
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=5',
    followers: 3400,
  },
];

const DUMMY_HASHTAGS = [
  {
    id: '1',
    name: 'photography',
    postsCount: 12500,
  },
  {
    id: '2',
    name: 'gaming',
    postsCount: 45000,
  },
  {
    id: '3',
    name: 'coding',
    postsCount: 8900,
  },
];

const DUMMY_POSTS = [
  {
    id: '1',
    userId: 'johndoe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Beautiful sunset today! 🌅 #nature #photography',
    images: ['https://images.unsplash.com/photo-1695653420644-ab3d6a039d53'],
    likes: 42,
    comments: 5,
  },
  {
    id: '2',
    userId: 'janedoe',
    avatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Coding all day! 💻 #programming',
    images: [],
    likes: 23,
    comments: 3,
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'users', label: 'Users' },
    { key: 'hashtags', label: 'Hashtags' },
    { key: 'posts', label: 'Posts' },
  ];

  const renderResults = () => {
    if (!searchQuery) {
      return <Text style={styles.placeholderText}>Enter a search term</Text>;
    }

    switch (activeTab) {
      case 'users':
        return (
          <FlatList
            data={DUMMY_USERS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <UserResult user={item} />}
          />
        );
      case 'hashtags':
        return (
          <FlatList
            data={DUMMY_HASHTAGS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <HashtagResult tag={item.name} />}
          />
        );
      case 'posts':
        return (
          <FlatList
            data={DUMMY_POSTS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PostResult post={item} />}
          />
        );
      default:
        return (
          <>
            {DUMMY_USERS.map((user) => (
              <UserResult key={user.id} user={user} />
            ))}
            {DUMMY_HASHTAGS.map((tag) => (
              <HashtagResult key={tag.id} tag={tag.name} />
            ))}
            {DUMMY_POSTS.map((post) => (
              <PostResult key={post.id} post={post} />
            ))}
          </>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name='search' size={20} color={Colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder='Search...'
          placeholderTextColor={Colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons
              name='close-circle'
              size={20}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.activeTab]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.key && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Results */}
      <View style={styles.resultsContainer}>{renderResults()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    marginLeft: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 15,
    color: Colors.textSecondary,
  },
  activeTabText: {
    color: Colors.text,
    fontWeight: '600',
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  placeholderText: {
    textAlign: 'center',
    color: Colors.textSecondary,
    fontSize: 16,
  },
});
