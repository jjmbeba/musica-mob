import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";

const SectionContainer = ({title, children}) => {

    let [fontsLoaded] = useFonts({
        Quicksand_700Bold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </View> 
  )
}

export default SectionContainer

const styles = StyleSheet.create({
    container: {
      marginTop: 47,
    },
    title: {
      fontFamily:'Quicksand_700Bold',
      fontSize:20,
      color:'#EFEEE0'
    },
    childrenContainer:{
        marginTop:16
    }
  });