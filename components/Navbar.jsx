import {
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import Logo from '../assets/logo.svg'


const Navbar = ({setMenuState}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => setMenuState(true)}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Logo/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Feather name="search" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer:{
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    gap:20
  }
});
