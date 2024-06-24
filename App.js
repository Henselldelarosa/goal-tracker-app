import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

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
            <View style={styles.goalsItems}>
              <Text style={styles.goalText}> {itemData.item.text}</Text>
            </View>
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
  },

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
});
