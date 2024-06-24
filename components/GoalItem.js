import React from 'react'
import {StyleSheet, Text, View, Pressable} from 'react-native'

const GoalItem = ({data, onDelete, id}) => {
  return (
    <View style={styles.goalsItems}>
        <Pressable
        onPress={onDelete.bind(this, id)}
        android_ripple={{color: ' #210644'}}
        style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}> {data}</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  goalsItems:{
    margin:8,
    padding:8,
    borderRadius: 6,
    backgroundColor:'#5e0acc',

  },
  pressedItem:{
    opacity:0.5
  },

  goalText:{
    color:'white',
    textAlign:'center'
  }
})

export default GoalItem
