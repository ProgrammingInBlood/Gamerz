import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

interface OnlineStatusProps {
  isOnline: boolean;
  size?: number;
  style?: object;
}

export default function OnlineStatus({ 
  isOnline, 
  size = 12,
  style 
}: OnlineStatusProps) {
  return (
    <View style={[
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: isOnline ? Colors.success : Colors.textSecondary
      },
      style
    ]} />
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.background,
  },
}); 