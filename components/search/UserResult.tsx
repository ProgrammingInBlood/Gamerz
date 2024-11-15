import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

const UserResult = ({ user }: { user: User }) => (
  <View style={styles.userContainer}>
    <Image source={{ uri: user.avatar }} style={styles.avatar} />
    <View style={styles.userInfo}>
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.name}>{user.name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
  },
  name: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default UserResult;
