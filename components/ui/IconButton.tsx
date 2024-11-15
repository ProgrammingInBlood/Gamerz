import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

interface IconButtonProps {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: object;
  backgroundColor?: string;
}

export default function IconButton({ 
  name, 
  size = 20, 
  color = Colors.textSecondary,
  onPress,
  style,
  backgroundColor = 'transparent'
}: IconButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { backgroundColor },
        style
      ]} 
      onPress={onPress}
    >
      <Feather name={name as any} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 