import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import TaskListScreen from './screens/TaskListScreen';

export default function App() { // this just gives the app title and then routes to the TaskListScreen page where all the magic happens
  return (

      <View style={styles.container}>
        <Text style={styles.baseText}>Simple To-Do List App</Text>
        <TaskListScreen />
      </View>
  );
}


// The following are some basic CSS code in order to supplement Tailwind not working here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,

  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 31,
    marginHorizontal: 'auto',
    marginTop: 20,
  },
});
