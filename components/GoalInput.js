import React,{useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const GoalInput = ({addGoal,showModal, cancel}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (text) => {
    setEnteredGoalText(text)
  }

  const addGoalHandler = () => {
    addGoal(enteredGoalText)
    setEnteredGoalText('')
  }



  return (

    <Modal visible={showModal} animationType='slide'>

      <View style={styles.inputContainer}>

        <TextInput
          placeholder='Your Course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />

        <View style={styles.buttonContainer}>

          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler}/>
          </View>

          <View style={styles.button}>
            <Button title='Cancel' onPress={cancel}/>
          </View>

        </View>
       </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    padding:16
  },

  textInput: {
    borderWidth: 1,
    borderBlockColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8
  },
  buttonContainer:{
    flexDirection: "row",
    marginTop:8
  },

  button:{
    width:100,
    marginHorizontal:8,
  }
})

export default GoalInput
