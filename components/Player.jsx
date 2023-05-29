import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Player = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Player</Text>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({
    container:{
        position:'fixed',
        bottom:0
    }
})