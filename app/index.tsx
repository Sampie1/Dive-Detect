// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import GameScreen from './screens/GameScreen';  // Update naar ./screens/

// Types voor navigatie
type RootStackParamList = {
  Home: undefined;
  GameScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  // Verplaats de handleLinkPress-functie naar binnen de HomeScreen component
  const handleLinkPress = (linkType: string) => {
    if (linkType === "Onderzoeken") {
      navigation.navigate('GameScreen');
    } else {
      console.log(`${linkType} link clicked`);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/onderwater.gif')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>DIVE + DETECT</Text>

          <TouchableOpacity onPress={() => handleLinkPress("Onderzoeken")}>
            <Text style={styles.link}>Onderzoeken</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleLinkPress("Collectie")}>
            <Text style={styles.link}>Collectie</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleLinkPress("Badges")}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 100,
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  link: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 10,
    textDecorationLine: "underline",
    marginTop: 40,
    fontWeight: "bold",
  },
  },
);
