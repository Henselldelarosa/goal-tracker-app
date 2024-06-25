import React,{useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'

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
      <Image
      source={require('../assets/images/goal.png')}
      style={styles.images}
      />

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
    padding:16,
    backgroundColor:'#311b6b'
  },
  images:{
    width:100,
    height:100,
    margin:20
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
  },

})

export default GoalInput
