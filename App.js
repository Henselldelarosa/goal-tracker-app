import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (text) => {
    setEnteredGoalText(text)
  }

  const addGoalHandler = () =>{
    setGoals((currentGoal) => [
      ... currentGoal,
      {text: enteredGoalText, key: Math.random().toString()}
      //This is just for this example
    ])
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>

        <TextInput
          placeholder='Your Course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />

        <Button
        title='Add Goal'
        onPress={addGoalHandler}
        />
      </View>


      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem data={itemData.item.text}/>
          )
        }}
        alwaysBounceVertical={false}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16
  },

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

  goalsContainer:{
    flex: 5
  }
});
