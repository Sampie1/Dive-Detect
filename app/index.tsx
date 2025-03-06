import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function Index() {
  const handleLinkPress = (linkType: string) => {
    console.log(`${linkType} link clicked`);
    // Hier kan je navigeren naar andere schermen of acties toevoegen
  };

  return (
    <View style={styles.container}>
      {/* Geanimeerde Onderwater GIF Achtergrond */}
      <ImageBackground
        source={require('../assets/onderwater.gif')} // Vervang met jouw eigen GIF bestand
        style={styles.background}
      >
        {/* Overlay voor de links */}
        <View style={styles.overlay}>
          <Text style={styles.title}>DIVE + DETECT</Text>
          
          {/* Onderzoeken link */}
          <TouchableOpacity onPress={() => handleLinkPress("Onderzoeken")}>
            <Text style={styles.link}>Onderzoeken</Text>
          </TouchableOpacity>

          {/* Collectie link */}
          <TouchableOpacity onPress={() => handleLinkPress("Collectie")}>
            <Text style={styles.link}>Collectie</Text>
          </TouchableOpacity>

          {/* Badges link */}
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
    zIndex: 1, // Zorg ervoor dat de links boven de GIF komen
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 30,
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  link: {
    marginTop: 40,
    color: "#fff", // Witte tekstkleur
    fontSize: 28,
    fontWeight: "bold",
    textDecorationLine: 'underline', // Voeg onderstreping toe
    marginVertical: 80, // Ruimte tussen de links
    
  },

  viewStyle : {
    paddingBottom: 4,
  }
});
