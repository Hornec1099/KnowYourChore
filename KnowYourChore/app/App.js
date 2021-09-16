import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View , FlatList} from "react-native";
import HomePage from "./screens/HomePage";
import taskService from "./services/tasksService";


export default function App() {

  // const [tasks, setTasks] = useState([]);
  

  // const getAllTasks = async () => {
  //     const response = await taskService.getTasks();
  //     setTasks(response);
  // };

  // useEffect(() => {
  //   getAllTasks();
  // }, []);

  // const renderItem = ({ item }) => {
  //   return (
  //     <View>
  //   <Text> {item.taskName} </Text>
  //   <Text> {item.taskDescription} </Text>
  //   <Text> {item.taskLocation} </Text>
  //   <Text> {item.taskAssignedTo} </Text>
  //   </View>
  //   )
  // }

  

  return (
        <HomePage />
      // <FlatList
      // data={tasks}
      // keyExtractor={(task)  => task.id.toString()}
      // renderItem={ renderItem } />
  );
}

