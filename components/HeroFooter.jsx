import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import ProfileImages from "../assets/images/profile-images.svg";
import { useFonts } from "expo-font";
import {
  Quicksand_700Bold,
  Quicksand_400Regular,
} from "@expo-google-fonts/quicksand";
import Heart from "../assets/images/heart.svg";

const HeroFooter = () => {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ProfileImages width={85} />
      <View style={styles.likesContainer}>
        <Heart />
        <Text style={styles.likes}>33k Likes</Text>
      </View>
    </View>
  );
};

export default HeroFooter;

const styles = StyleSheet.create({
  container: {
    marginTop: 46,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  likes: {
    color: "white",
    fontSize: 23.8,
    fontFamily: "Quicksand_400Regular",
  },
});
