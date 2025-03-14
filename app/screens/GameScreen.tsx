import React, { useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';

// Define the path for the background asset
const oceanBackground = require('@/assets/onderwater.gif');

export default function GameScreen() {
  // Animated value for light position
  const lightPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // PanResponder to detect player movement
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // Update the light position based on the exact finger coordinates
        Animated.timing(lightPosition, {
          toValue: { x: gestureState.moveX, y: gestureState.moveY },
          duration: 0, // No delay for smooth tracking
          useNativeDriver: false,
        }).start();
      },
      onPanResponderRelease: () => {
        // Optional: handle when the touch is released if needed
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* Background image */}
      <Animated.Image source={oceanBackground} style={styles.background} />

      {/* Animated light effect */}
      <Animated.View
        style={[
          styles.light,
          {
            transform: [
              { translateX: lightPosition.x }, // Follow X coordinate
              { translateY: lightPosition.y }, // Follow Y coordinate
            ],
          },
        ]}
        {...panResponder.panHandlers} // Attach the PanResponder to the light view
      >
        {/* Light effect (beam or circle) */}
        <View style={styles.lightBeam} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  light: {
    width: 200,
    height: 200,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBeam: {
    width: 300,
    height: 150,
    borderRadius: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: 'rgba(255, 255, 255, 0.8)',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 30,
  },
});
