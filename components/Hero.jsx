import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import {Quicksand_700Bold, Quicksand_400Regular} from '@expo-google-fonts/quicksand'
import HeroFooter from "./HeroFooter";

const Hero = () => {
    let [fontsLoaded] = useFonts({
      Quicksand_700Bold, Quicksand_400Regular
    });

    if(!fontsLoaded){
        return null;
    }

  return (
    <View style={styles.container}>
      <Text style={styles.smallHeading}>Currated playlist</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.largeHeading}>R & B Hits</Text>
        <Text style={styles.content}>
          All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
          habit, and so much more
        </Text>
      </View>
      <HeroFooter/>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    backgroundColor: "#609EAF",
    paddingTop: 32,
    paddingLeft: 33,
    paddingRight:58,
    paddingBottom: 42,
    borderRadius: 20,
  },
  smallHeading: {
    fontSize: 12,
    color: "#FFF",
    fontFamily: "Quicksand_400Regular",
  },
  contentContainer: {
    marginTop: 236,
  },
  largeHeading: {
    fontSize: 35,
    color: "#FFF",
    fontFamily: "Quicksand_700Bold",
  },
  content: {
    marginTop: 6,
    fontFamily: "Quicksand_400Regular",
    fontSize: 14,
    maxWidth: 276,
    color:'white'
  },
});
