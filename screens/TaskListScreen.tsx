// Importing necessary modules from React and React Native libraries
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { tw } from 'react-native-tailwindcss';
import { RadioButton } from 'react-native-paper';

// Defining the data types for the variables (typescript)
interface TaskItem {
  task: string;
  completed: boolean;
  clickCount: number;
}

// Functional component for the Task List Screen
const TaskListScreen: React.FC = () => {
  // State variables to manage tasks and new task input
  const [tasks, setTasks] = useState<TaskItem[]>([]); // initialls TaskItem is an empty list/array
  const [newTask, setNewTask] = useState<string>(''); // newtask is initially an empty string and this is the input field 

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask, completed: false, clickCount: 0 }]);
      setNewTask('');
    }
  };

  // Function to toggle the completion status of a task
  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        const newClickCount = task.clickCount + 1;
        if (newClickCount >= 2) {
          return null; // Mark task as null (delete it) if clicked more than twice
        }
        return { ...task, completed: !task.completed, clickCount: newClickCount };
      }
      return task;
    }).filter(task => task !== null) as TaskItem[]; // keeps only tasks that are not null

    setTasks(updatedTasks); // Update the tasks with the modified list
  };

  // Rendering the Task List Screen UI
  return (
    <View style={[tw.flex1, tw.bgWhite]}>
      <Text style={[tw.fontBold, tw.text2xl, tw.mB8]}>
        {"\n"} {/* Adding empty space just for aesthitics */}
      </Text>

      {/* Input field for entering new tasks */}
      <View style={[tw.flexRow, tw.itemsCenter]}>
        <TextInput
          style={[tw.border, tw.borderGray400, tw.rounded, tw.p2, tw.mB4, tw.textBlack]}
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Enter new task"
        />
        <Button title="Save" onPress={addTask} />
      </View>
      
      {/* Displaying the list of tasks */}
      <View>
        {tasks.map((task, index) => (
          <View key={index} style={[tw.flexRow, tw.itemsCenter, tw.mB4]}>
            {/* RadioButton to indicate completion status of the task */}
            <RadioButton
              value={task.task}
              status={task.completed ? 'checked' : 'checked'} // Changed status to unchecked when task is not completed
              onPress={() => toggleTask(index)}
              color={task.clickCount === 0 ? 'red' : 'green'} // Color changes based on the number of clicks
            />
            <Text>{task.task}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Exporting the TaskListScreen component as default
export default TaskListScreen;
