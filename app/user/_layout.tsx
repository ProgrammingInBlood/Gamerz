import { Colors } from '@/constants/Colors';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Slot />
    </SafeAreaView>
  );
}
