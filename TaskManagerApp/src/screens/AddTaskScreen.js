import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function AddTaskScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleAdd = () => {
    console.log('New task:', { task, assignedTo });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        label="Task Title"
        value={task}
        onChangeText={setTask}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Assign To"
        value={assignedTo}
        onChangeText={setAssignedTo}
        style={{ marginBottom: 16 }}
      />
      <Button mode="contained" onPress={handleAdd}>
        Add Task
      </Button>
    </View>
  );
}
