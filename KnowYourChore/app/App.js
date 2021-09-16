import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import taskService from "./services/tasksService";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then((tasks) => setTasks(tasks));
  }, []);

  return( 
  
  <View>{tasks}</View>
  )}
