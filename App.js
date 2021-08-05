import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoal] = useState([]);
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoal => [...courseGoals, enteredGoal]);
  };
  return (
    <View style={Styles.screen}>
      <View style={Styles.inputContainer}>
        <View>
          <TextInput
            placeholder="course goal"
            style={Styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button title="Add" onPress={addGoalHandler} />
        </View>
      </View>
      <View>
        {courseGoals.map(goal => (
          <View Key={goal} Style={Styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
  },

  listItem: {
    padding: 10,
    backgroundColor: 'yellow',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default App;
