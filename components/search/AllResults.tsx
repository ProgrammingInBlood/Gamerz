import React from 'react';
import { View, Text } from 'react-native';

export default function AllResults({ searchQuery }: { searchQuery: string }) {
  return (
    <View>
      <Text>All Results for: {searchQuery}</Text>
    </View>
  );
}
