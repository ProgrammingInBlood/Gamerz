import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='feed'
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <Feather name='bell' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='messages'
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Feather name='message-circle' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Feather name='search' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name='user' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
