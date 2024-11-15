import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Post } from '../../types';
import Avatar from '../ui/Avatar';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
}

export default function PostCard({ post, onLike, onComment }: PostCardProps) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const screenWidth = Dimensions.get('window').width;
  const containerPadding = 32;
  const containerMargin = 32;
  const imageWidth = screenWidth - (containerPadding + containerMargin);

  const handleScroll = (event: any) => {
    const slideSize = imageWidth;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveImageIndex(Math.round(index));
  };

  const renderContent = () => {
    const words = post.content.split(' ');
    return words.map((word, index) => {
      if (word.startsWith('#')) {
        return (
          <Text key={index} style={[styles.content, styles.hashtag]}>
            {word}{' '}
          </Text>
        );
      }
      return (
        <Text key={index} style={styles.content}>
          {word}{' '}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar url={post.avatar} size={36} />
        <Text style={styles.username}>@{post.userId}</Text>
      </View>

      <View style={styles.contentContainer}>{renderContent()}</View>

      {post.images && post.images.length > 0 && (
        <View style={styles.imageContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            decelerationRate='fast'
            snapToInterval={imageWidth + 8}
            scrollEnabled={post.images.length > 1}
          >
            {post.images.map((image, index) => (
              <View
                key={index}
                style={[
                  styles.imageWrapper,
                  (post.images?.length === 1 ||
                    index === post.images!.length - 1) &&
                    styles.imageWrapperNoMargin,
                ]}
              >
                <Image
                  source={{ uri: image }}
                  style={[styles.image, { width: imageWidth }]}
                  resizeMode='cover'
                />
              </View>
            ))}
          </ScrollView>

          {post.images.length > 1 && (
            <>
              <View style={styles.statusContainer}>
                {post.images.map((_, index) => (
                  <View key={index} style={styles.statusBarContainer}>
                    <View
                      style={[
                        styles.statusBar,
                        {
                          backgroundColor:
                            index <= activeImageIndex
                              ? Colors.primary
                              : '#ffffff40',
                        },
                      ]}
                    />
                  </View>
                ))}
              </View>

              <View style={styles.imageCounter}>
                <Text style={styles.imageCounterText}>
                  {`${activeImageIndex + 1}/${post.images.length}`}
                </Text>
              </View>
            </>
          )}
        </View>
      )}

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onLike(post.id)}
        >
          <Feather
            name={post.isLiked ? 'heart' : 'heart'}
            size={20}
            color={post.isLiked ? Colors.primary : Colors.textSecondary}
          />
          <Text style={styles.actionText}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onComment(post.id)}
        >
          <Feather
            name='message-circle'
            size={20}
            color={Colors.textSecondary}
          />
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Feather name='share-2' size={20} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  username: {
    color: Colors.text,
    fontWeight: '600',
    marginLeft: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  content: {
    color: Colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  hashtag: {
    color: Colors.primary,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  imageContainer: {
    marginBottom: 12,
    position: 'relative',
  },
  imageWrapper: {
    marginRight: 8,
  },
  imageWrapperNoMargin: {
    marginRight: 0,
  },
  image: {
    height: 200,
    borderRadius: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  statusBarContainer: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  statusBar: {
    flex: 1,
    borderRadius: 2,
  },
  imageCounter: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
  },
  imageCounterText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
