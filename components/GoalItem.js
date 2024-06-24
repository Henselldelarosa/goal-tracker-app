import React from 'react'
import {StyleSheet, Text, View, Pressable} from 'react-native'

const GoalItem = ({data, onDelete, id}) => {
  return (
    <Pressable onPress={onDelete.bind(this, id)}>
      <View style={styles.goalsItems}>
          <Text style={styles.goalText}> {data}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalsItems:{
    margin:8,
    padding:8,
    borderRadius: 6,
    backgroundColor:'#5e0acc',

  },
  goalText:{
    color:'white',
    textAlign:'center'
  }
})

export default GoalItem
