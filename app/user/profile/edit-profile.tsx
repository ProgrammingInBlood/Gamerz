import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { User } from '../../../types';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function EditProfileScreen() {
    const [user, setUser] = useState<User>({
        id: '1',
        username: 'ProGamer',
        email: 'progamer@example.com',
        displayName: 'Eklavya Singh',
        bio: 'Competitive gamer | Streaming daily | Follow for gaming tips!',
        favoriteGames: ['Elden Ring', 'Fortnite', 'Valorant'],
        followers: 1234,
        following: 567,
        isOnline: false,
        posts: 45,
        recentActivity: []
    });

    const handleSave = () => {
        // TODO: Implement save functionality
        router.back();
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Edit Profile</Text>
                <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.changeAvatarButton}>
                    <Text style={styles.changeAvatarText}>Change Photo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={user.username}
                        onChangeText={(text) => setUser({ ...user, username: text })}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Gamertag</Text>
                    <TextInput
                        style={styles.input}
                        value={user.displayName}
                        onChangeText={(text) => setUser({ ...user, displayName: text })}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Bio</Text>
                    <TextInput
                        style={[styles.input, styles.bioInput]}
                        value={user.bio}
                        onChangeText={(text) => setUser({ ...user, bio: text })}
                        multiline
                        numberOfLines={4}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Favorite Games</Text>
                    {user.favoriteGames?.map((game, index) => (
                        <View key={index} style={styles.gameInputContainer}>
                            <TextInput
                                style={styles.gameInput}
                                value={game}
                                onChangeText={(text) => {
                                    const newGames = [...user.favoriteGames!];
                                    newGames[index] = text;
                                    setUser({ ...user, favoriteGames: newGames });
                                }}
                            />
                            <TouchableOpacity style={styles.removeGameButton}>
                                <FontAwesome name="times" size={20} color={Colors.text} />
                            </TouchableOpacity>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.addGameButton}>
                        <Text style={styles.addGameText}>+ Add Game</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.card,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
    },
    backButton: {
        padding: 8,
    },
    saveButton: {
        padding: 8,
    },
    saveButtonText: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    avatarContainer: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    changeAvatarButton: {
        padding: 8,
    },
    changeAvatarText: {
        color: Colors.primary,
        fontSize: 16,
    },
    form: {
        padding: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        color: Colors.text,
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        backgroundColor: Colors.card,
        borderRadius: 8,
        padding: 12,
        color: Colors.text,
    },
    bioInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    gameInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    gameInput: {
        flex: 1,
        backgroundColor: Colors.card,
        borderRadius: 8,
        padding: 12,
        color: Colors.text,
        marginRight: 8,
    },
    removeGameButton: {
        padding: 8,
    },
    addGameButton: {
        padding: 12,
        backgroundColor: Colors.card,
        borderRadius: 8,
        alignItems: 'center',
    },
    addGameText: {
        color: Colors.primary,
        fontSize: 16,
    },
}); 