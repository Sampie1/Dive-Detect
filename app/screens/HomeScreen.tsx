import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

// Define the type for the props
interface HomeScreenProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function HomeScreen({ setActiveTab }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/onderwater.gif')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>DIVE + DETECT</Text>

          <TouchableOpacity onPress={() => setActiveTab('GameScreen')}>
            <Text style={styles.link}>Onderzoeken</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Home')}>
            <Text style={styles.link}>Collectie</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('BadgeScherm')}>
            <Text style={styles.link}>Badges</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 100,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  link: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
    textDecorationLine: 'underline',
    marginTop: 40,
    fontWeight: 'bold',
  },
});
