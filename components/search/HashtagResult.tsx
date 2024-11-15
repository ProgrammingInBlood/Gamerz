import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const HashtagResult = ({ tag }: { tag: string }) => (
  <View style={styles.hashtagContainer}>
    <Fontisto name='hashtag' size={20} color={Colors.textSecondary} />
    <Text style={styles.hashtagText}>#{tag}</Text>
  </View>
);

const styles = StyleSheet.create({
  hashtagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 8,
  },
  hashtagText: {
    fontSize: 16,
    color: Colors.text,
  },
});

export default HashtagResult;
