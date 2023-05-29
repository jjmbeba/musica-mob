import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";

const TopChartCard = (item) => {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const {artist, cover, title, duration} = item.data.item;


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: cover,
          }}
          style={styles.image}
        />
        <View style={styles.heartContainer}>
          <Ionicons name="md-heart-outline" size={24} color="#FACD66" />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{artist}</Text>
      <Text style={styles.time}>{duration}</Text>
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
