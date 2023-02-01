
import { StyleSheet, Text, View, Button, Pressable, TextInput, Image } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [enteredGoalText, setEnteredGoalText ] = useState('');
  const [listOfGoals, setListOfGoals] = useState([]);

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
};

function addGoalHandler () {
setListOfGoals((currentListOfGoals) => [...currentListOfGoals, enteredGoalText,]);
}  

  return (
    <View style={styles.appContainer}>
      <View style={styles.appHeader}>
      <View>
          <Text style={styles.appHeaderTop}>Hallo Kemi</Text>
          <Text style={styles.appHeaderButtom}>Let's help you set your goals</Text>
      </View>
      <Image style={styles.profile} source={require('./assets/profile.png')} />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course goals here' onChangeText={goalInputHandler} />
        <Pressable style={styles.addGoals} onPress={addGoalHandler} ><Text style={styles.addGoalsText}>Add Goal</Text></Pressable>
      </View>
      <View style={styles.goalsContainer}>
       {listOfGoals.map((goal) => <Text style={styles.goalsText} key={goal}>{goal}</Text> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 35,
    marginTop: 40,
  },

  appHeader: {
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  profile: {
    width: 60,
    height: 60,
  },

  appHeaderTop: {
    fontSize: '30px',
    fontWeight: '700'
  },

  appHeaderButtom: {
      fontSize: '16px',
      color: 'grey'
  },

  inputContainer: {
    justifyContent: 'space-between'
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    marginTop: 5,
    borderRadius: 30,
    width: '100%'
  },

  addGoals: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 30,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  addGoalsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: '18px',
  },

  goalsContainer: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    borderColor: 'black',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },

  goalsText: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
    padding: 20,
  },

});
