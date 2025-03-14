import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useBadges } from "../badges/BadgeContext";

export default function BadgesScreen()  {
    const { badges } = useBadges();

    return (
        <View style={styles}>
            <Text style={styles}>BADGES</Text>
            <FlatList
              data={badges}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={[styles, item.unlocked ? styles : styles]}>
                  <Text style={styles}>{item.icon}</Text>
                  <View>
                    <Text style={styles}>{item.title}</Text>
                    <Text style={styles}>{item.description}</Text>
                  </View>
                </View>
        )}
      />

        
        </View>
    )
}

const styles = StyleSheet.create({})

