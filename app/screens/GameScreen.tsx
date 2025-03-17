import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, PanResponder, Dimensions, Text, TouchableOpacity } from 'react-native';

// Achtergrondafbeelding
const oceanBackground = require('@/assets/onderwater.gif');

// Lijst met visafbeeldingen
const fishImages = [
  require('@/assets/fish1.png'),
  require('@/assets/fish2.png'),
  require('@/assets/fish3.png'),
];

// Type voor een visobject
type Fish = {
  x: number;
  y: number;
  image: any;
  visible: boolean; // Of de vis zichtbaar is
  id: string; // Unieke id voor elke vis
};

// Haal schermbreedte en -hoogte op
const { width, height } = Dimensions.get('window');

export default function GameScreen() {
  const [position, setPosition] = useState({ x: width / 2, y: height / 2 });
  const [fishes, setFishes] = useState<Fish[]>([]);
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null);

  const lightRadius = 100; // Grootte van de lichtcirkel

  // PanResponder om de lichtcirkel te slepen
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        setPosition({ x: gestureState.moveX, y: gestureState.moveY });
      },
      onPanResponderRelease: () => {
        // Spawn altijd een vis op een willekeurige positie
        const randomFish = fishImages[Math.floor(Math.random() * fishImages.length)];
        const randomX = Math.random() * (width - 50); // Willekeurige X-coördinaat
        const randomY = Math.random() * (height - 50); // Willekeurige Y-coördinaat
        const fishId = Math.random().toString(); // Unieke id voor de vis
        setFishes((prevFishes) => [
          ...prevFishes,
          { x: randomX, y: randomY, image: randomFish, visible: false, id: fishId },
        ]);
      },
    })
  ).current;

  // Controleer of de lichtcirkel over een vis beweegt en maak deze zichtbaar
  const checkFishVisibility = (fish: Fish) => {
    const distance = Math.sqrt(
      Math.pow(fish.x - position.x, 2) + Math.pow(fish.y - position.y, 2)
    );
    return distance <= lightRadius; // Als de cirkel binnen de straal van de vis komt, wordt hij zichtbaar
  };

  // Controleer of er op een vis is geklikt
  const handleFishClick = (fish: Fish) => {
    setSelectedFish(fish);
  };

  // Verstuur vis naar de wetenschapper
  const handleSendToScientist = () => {
    if (selectedFish) {
      // Verwijder de gevangen vis van het scherm
      setFishes(fishes.filter(fish => fish.id !== selectedFish.id));
      setSelectedFish(null);
    }
  };

  return (
    <View style={styles.container}>
      {/* Achtergrondafbeelding */}
      <Image source={oceanBackground} style={styles.background} />

      {/* Gespawnte vissen */}
      {fishes.map((fish) => {
        const isVisible = checkFishVisibility(fish); // Controleer of de vis zichtbaar moet zijn
        return (
          <TouchableOpacity
            key={fish.id}
            onPress={() => handleFishClick(fish)} // Klik op vis
            style={[
              styles.fish,
              { left: fish.x, top: fish.y, opacity: isVisible ? 1 : 0 },
            ]}
          >
            <Image
              source={fish.image}
              style={[styles.fishImage, { opacity: isVisible ? 1 : 0 }]}
            />
          </TouchableOpacity>
        );
      })}

      {/* Sleepbare lichtcirkel */}
      <View
        style={[styles.light, { left: position.x - lightRadius / 2, top: position.y - lightRadius / 2 }]}
        {...panResponder.panHandlers} // PanResponder koppelen
      />

      {/* Toon de gevangen vis en de knop */}
      {selectedFish && (
        <View style={styles.infoBox}>
          <Text style={styles.text}>Je hebt een vis gevangen!</Text>
          <Image source={selectedFish.image} style={styles.selectedFishImage} />
          <TouchableOpacity onPress={handleSendToScientist} style={styles.button}>
            <Text style={styles.buttonText}>Verstuur naar de wetenschapper</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  light: {
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 200, 0.3)',
  },
  fish: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  fishImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoBox: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: [{ translateX: -150 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  selectedFishImage: {
    width: 130,
    height: 75,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
