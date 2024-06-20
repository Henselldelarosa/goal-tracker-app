import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your Course goal!'
          style={styles.textInput}
        />
        <Button title='Add Goal'/>
      </View>

      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 60
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textInput: {
    borderWidth: 1,
    borderBlockColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8
  }
});
