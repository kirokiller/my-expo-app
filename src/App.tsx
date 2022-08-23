import { View, Text, ScrollView, Animated } from "react-native";
import React from "react";

export default function App() {
  return (
    <Animated.ScrollView
      onScroll={(e) => {
        console.log("🚀🚀🚀e:", e.nativeEvent.contentOffset);
      }}
      contentOffset={{ x: 0, y: 200 }} // ios
    >
      <View style={{ height: 1200, backgroundColor: "pink" }} />
    </Animated.ScrollView>
  );
}
