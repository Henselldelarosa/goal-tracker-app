import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const GoalItem = ({data}) => {
  return (
    <View style={styles.goalsItems}>
        <Text style={styles.goalText}> {data}</Text>
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
  goalText:{
    color:'white',
    textAlign:'center'
  }
})

export default GoalItem
