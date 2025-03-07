import React, { useState } from 'react';
import { View, Image, StyleSheet, PanResponder, Animated, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function GameScreen() {
  // Duikerpositie op de zeebodem
  const [diverPosition] = useState(new Animated.ValueXY({ x: width / 2, y: height / 2 }));

  // PanResponder voor het slepen van de duiker
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: diverPosition.x, dy: diverPosition.y }], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      Animated.spring(diverPosition, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  // Parallax layers, met verschillende snelheden
  const parallaxLayers = [
    require('@/assets/parallax/1.jpeg'),
    require('@/assets/parallax/2.jpeg'),
    require('@/assets/parallax/3.jpeg'),
    require('@/assets/parallax/4.jpeg'),
    require('@/assets/parallax/5.jpeg'),
    require('@/assets/parallax/6.jpeg'),
    require('@/assets/parallax/7.jpeg'),
    require('@/assets/parallax/8.jpeg'),
  ];

  return (
    <View style={styles.container}>
      {parallaxLayers.map((layer, index) => (
        <Animated.Image
          key={index}
          source={layer}
          style={[
            styles.parallaxLayer,
            {
              transform: [
                {
                  translateY: diverPosition.y.interpolate({
                    inputRange: [-height, 0, height],
                    outputRange: [-(index * 50), 0, index * 50], // Hoe verder de index, hoe langzamer de laag beweegt
                  }),
                },
              ],
            },
          ]}
        />
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parallaxLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  diver: {
    position: 'absolute',
    width: 100, // Breedte van de duiker
    height: 100, // Hoogte van de duiker
  },
  diverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
