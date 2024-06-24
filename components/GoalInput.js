import React,{useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const GoalInput = ({input, addGoal}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (text) => {
    setEnteredGoalText(text)
  }

  const addGoalHandler = () => {
    addGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (

    <View style={styles.inputContainer}>

    <TextInput
      placeholder='Your Course goal!'
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />

    <Button
    title='Add Goal'
    onPress={addGoalHandler}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },

  textInput: {
    borderWidth: 1,
    borderBlockColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
})

export default GoalInput
