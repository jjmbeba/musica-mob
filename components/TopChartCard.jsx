import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";

const TopChartCard = () => {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1679592098614-ae83589aa91a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          }}
          style={styles.image}
        />
        <View style={styles.heartContainer}>
          <Ionicons name="md-heart-outline" size={24} color="#FACD66" />
        </View>
      </View>
      <Text style={styles.title}>Golden age of 80s</Text>
      <Text style={styles.subtitle}>Sean swadder</Text>
      <Text style={styles.time}>2:34:45</Text>
    </View>
  );
};

export default TopChartCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 14,
    paddingTop: 15,
    paddingBottom: 23,
    backgroundColor: "#1A1E1F",
    borderRadius: 20,
    width: 270,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  image: {
    width: 108,
    height: 99,
    borderRadius: 10,
  },
  heartContainer: {
    padding: 10,
    borderColor: "rgba(255, 255, 255, 0.11)",
    borderWidth: 1,
    borderRadius: 9999,
  },
  title: {
    marginTop: 15,
    fontSize: 17,
    lineHeight:20.4,
    fontFamily:'Quicksand_400Regular',
    color:"#FFF"
  },
  subtitle:{
    marginTop:6,
    fontSize:12,
    lineHeight:14.4,
    color:'rgba(255, 255, 255, 0.5)',
    fontFamily:'Quicksand_400Regular',
  },
  time:{
    marginTop:24,
    fontSize:14,
    lineHeight:16.8,
    color:'#FFF',
    fontFamily:'Quicksand_400Regular',
  }
});
