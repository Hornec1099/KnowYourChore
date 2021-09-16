import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import taskService from "./services/tasksService";
import TextComponent from "./textComponent";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then((tasks) => setTasks(tasks));
  }, []);
  console.log(tasks);
  return <TextComponent tasks={tasks} />;
}
