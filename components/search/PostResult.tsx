import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface Post {
  id: string;
  content: string;
}

const PostResult = ({ post }: { post: Post }) => (
  <View style={styles.postContainer}>
    <Ionicons name='document-text' size={20} color={Colors.textSecondary} />
    <Text style={styles.postText} numberOfLines={2}>
      {post.content}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 8,
  },
  postText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
});

export default PostResult;
