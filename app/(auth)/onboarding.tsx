import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/Colors';

interface OnboardingFormData {
  username: string;
  email: string;
  password: string;
  gamertag: string;
  favoriteGames: string[];
}

export default function Onboarding() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<OnboardingFormData>({
    username: '',
    email: '',
    password: '',
    gamertag: '',
    favoriteGames: [],
  });

  const handleNext = (): void => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit registration and redirect to main app
      router.replace('/feed');
    }
  };

  const updateFormData = (key: keyof OnboardingFormData, value: string | string[]): void => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Gamer!</Text>
      
      {step === 1 && (
        <View style={styles.step}>
          <Text style={styles.stepTitle}>Create Your Account</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={Colors.textSecondary}
            value={formData.username}
            onChangeText={(text) => updateFormData('username', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Colors.textSecondary}
            value={formData.email}
            onChangeText={(text) => updateFormData('email', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Colors.textSecondary}
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => updateFormData('password', text)}
          />
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {step === 3 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  step: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 24,
    color: Colors.text,
    marginBottom: 20,
  },
  input: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});