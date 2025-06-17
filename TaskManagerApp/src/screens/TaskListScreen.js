import React from 'react';
import { FlatList, View } from 'react-native';
import { List, FAB } from 'react-native-paper';

const dummyTasks = [
  { id: '1', title: 'Design logo', assignedTo: 'Karim', completed: false },
  { id: '2', title: 'Fix login bug', assignedTo: 'Sara', completed: true },
];

export default function TaskListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={dummyTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={`Assigned to: ${item.assignedTo}`}
            left={(props) => (
              <List.Icon
                {...props}
                icon={item.completed ? 'check' : 'checkbox-blank-outline'}
              />
            )}
          />
        )}
      />
      <FAB
        style={{ position: 'absolute', right: 16, bottom: 16 }}
        icon="plus"
        onPress={() => navigation.navigate('AddTask')}
      />
    </View>
  );
}
