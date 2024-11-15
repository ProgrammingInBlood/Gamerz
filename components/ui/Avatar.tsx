import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface AvatarProps {
  size?: number;
  url?: string;
}

export default function Avatar({ size = 40, url }: AvatarProps) {
  return (
    <Image
      source={{ 
        uri: url || 'https://via.placeholder.com/150'
      }}
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#2D2D2D',
  },
}); 