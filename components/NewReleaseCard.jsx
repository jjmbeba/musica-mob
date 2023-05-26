import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";

const NewReleaseCard = () => {

    let [fontsLoaded] = useFonts({
        Quicksand_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://images.unsplash.com/photo-1679592098614-ae83589aa91a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
              }}
            />
            <Text style={styles.title}>Life in a bubble</Text>
            <Text style={styles.artist}>The van</Text>
          </View>
  )
}

export default NewReleaseCard

const styles = StyleSheet.create({
    itemContainer:{
        gap:5
      },
      image: {
        width: 153,
        height: 153,
        borderRadius: 25,
      },
      title:{
        fontFamily:'Quicksand_400Regular',
        fontSize:12,
        lineHeight:15,
        color:'#FFF'
      },
      artist:{
        fontFamily:'Quicksand_400Regular',
        fontSize:12,
        lineHeight:15,
        color:'rgba(255, 255, 255, 0.5)'
      }
})