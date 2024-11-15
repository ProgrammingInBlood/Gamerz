import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { User, Activity } from '../../types/user';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const user: User = {
    id: '1',
    username: 'ProGamer',
    email: 'progamer@example.com',
    displayName: 'Eklavya Singh',
    bio: 'Competitive gamer | Streaming daily | Follow for gaming tips!',
    favoriteGames: ['Elden Ring', 'Fortnite', 'Valorant'],
    followers: 1234,
    following: 567,
    isOnline: false,
    posts: 42,
    recentActivity: [
      {
        id: '1',
        type: 'post',
        content: 'Just reached Diamond rank in Valorant! 🎮',
        timestamp: '2h ago',
      },
      {
        id: '2',
        type: 'achievement',
        content: 'Unlocked "Speed Runner" in Elden Ring',
        timestamp: '1d ago',
      },
      {
        id: '3',
        type: 'comment',
        content: 'Commented on "Top 10 Gaming Setups"',
        timestamp: '2d ago',
      },
    ],
  };

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        backgroundColor: Colors.background,
      }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{user.displayName}</Text>
          <Text style={styles.gamertag}>{user.username}</Text>

          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>

          <Text style={styles.bio}>{user.bio}</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => router.push('/user/profile/edit-profile')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Games</Text>
          <View style={styles.gamesList}>
            {user.favoriteGames?.map((game: string, index: number) => (
              <View key={index} style={styles.gameTag}>
                <Text style={styles.gameText}>{game}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {user.recentActivity.map((activity: Activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <Text style={styles.activityText}>{activity.content}</Text>
              <Text style={styles.timestamp}>{activity.timestamp}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.card,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  gamertag: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 15,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  statLabel: {
    color: Colors.textSecondary,
  },
  bio: {
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  editButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 15,
  },
  gamesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  gameTag: {
    backgroundColor: Colors.card,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  gameText: {
    color: Colors.text,
  },
  activityItem: {
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityText: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 5,
  },
  timestamp: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});
