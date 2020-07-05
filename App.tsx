import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { GameEngine } from "react-native-game-engine"

export default function App() {
  return (
    <GameEngine>
      <StatusBar hidden />
    </GameEngine>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
})
