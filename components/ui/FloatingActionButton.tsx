import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

interface FABProps {
  onPress: () => void;
  icon?: string;
}

export default function FloatingActionButton({ onPress, icon = 'plus' }: FABProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Feather name={icon as any} size={24} color={Colors.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
}); 