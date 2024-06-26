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
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => {
    setShowModal(true)
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  const addGoalHandler = (enteredGoalText) =>{

    setGoals((currentGoal) => [
      ... currentGoal,
      {text: enteredGoalText, key: Math.random().toString()}
      //This is just for this example
    ])

    setShowModal(false)
  }

  const handleDelete =(id) => {
    setGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
    <StatusBar
    style='light'
    />
    <View style={styles.appContainer}>
      <Button
      title='Add New Goal'
      color='#a065ec'
      onPress={handleShow}
      />

      {showModal && <GoalInput
      cancel={handleCancel}
      addGoal = {addGoalHandler}
      showModal={showModal}
      />}


      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem
            data={itemData.item.text}
            onDelete={handleDelete}
            id = {itemData.item.id}
            />
          )
        }}
        alwaysBounceVertical={false}
        />

      </View>

    </View>
</>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
    backgroundColor:'#1e085a'
  },

  goalsContainer:{
    flex: 5
  }
});
