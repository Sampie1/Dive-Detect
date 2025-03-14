import React, { useState } from 'react';
import { View } from 'react-native';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';
import BadgesScreen from './screens/BadgeScherm';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen setActiveTab={setActiveTab} />;
      case 'GameScreen':
        return <GameScreen />;
      case 'BadgeScherm':
        return <BadgesScreen />;
      default:
        return <HomeScreen setActiveTab={setActiveTab} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Render the current active screen */}
      {renderScreen()}
    </View>
  );
}
