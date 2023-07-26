import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function Card({ title, image }) {
  return (
    <ImageBackground source={{ uri: image }} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    justifyContent: 'center',
    width: 0.9 * windowWidth,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
