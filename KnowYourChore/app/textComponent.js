import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function TextComponent({ tasks }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={({ id }, index) => id}
      renderItem={({ task }) => {
        <Text> {task.taskName}</Text>;
      }}
    />
  );
}
