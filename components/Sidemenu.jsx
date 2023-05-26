import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import menu from "../assets/icons/index.js";
import { useFonts } from "expo-font";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { Ionicons } from "@expo/vector-icons";

const Sidemenu = ({setMenuState}) => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={() => setMenuState(false)}>
        <Ionicons name="ios-close-outline" size={36} color="white" />
      </TouchableOpacity>
      <FlatList
        data={menu}
        contentContainerStyle={styles.listContainer}
        renderItem={(item) => {
          const Icon = item.item.icon;
          return (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <Icon style={{margin:0, padding:0}}/>
                <Text style={styles.itemTitle}>{item.item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Sidemenu;

const styles = StyleSheet.create({
  container: {
    paddingTop: 109,
    paddingLeft: 37,
  },
  listContainer: {
    justifyContent: "center",
    gap: 50,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 27,
  },
  itemTitle: {
    fontSize: 17,
    lineHeight: 20.4,
    fontFamily: "Quicksand_700Bold",
    color: "rgba(239, 238, 224, 0.25)",
  },
  close:{
    position:'absolute',
    right:0
  }
});
