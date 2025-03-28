import React, { useState } from 'react';
import { View } from 'react-native';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen setActiveTab={setActiveTab} />;
      case 'GameScreen':
        return <GameScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Render the current active screen */}
      {renderScreen()}
    </View>
  );
}
