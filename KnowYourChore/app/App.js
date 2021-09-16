import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import taskService from "./services/tasksService";
import TextComponent from "./textComponent";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getAllTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tasks/");
      const data = await response.json();
      setTasks(data);
      console.log(data);
    } catch {
      (error) => {
        console.error(error);
      };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  console.log(tasks);

  return (
    <View>
      { isLoading ? <ActivityIndicator/> : (
      <TextComponent tasks={tasks} />
      )};
    </View>
  );
}
