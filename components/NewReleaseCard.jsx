import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";

const NewReleaseCard = (item) => {

    let [fontsLoaded] = useFonts({
        Quicksand_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

      const {artist, cover, title} = item.data.item;

  return (
    <View style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={{
                uri: cover
              }}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
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