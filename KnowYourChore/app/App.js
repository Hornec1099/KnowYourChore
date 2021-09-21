import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from "./screens/ListScreen";
import SelectionScreen from "./screens/SelectionScreen";
import HomePage from "./screens/HomePage";
import IndividualTaskScreen1 from "./screens/IndividualTaskScreenUpdate";
import IndividualTaskScreenNew from "./screens/IndividualTaskScreenNew";
import NewList from "./screens/NewListForm";

const Stack = createNativeStackNavigator();  


export default function App() {

  


  return (
    
    // this is the home base for our navigation technology

    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         {/* this navigates to the Home screen */}
         <Stack.Screen name="Home" component ={HomePage}/>
         {/* this navigates to the Selection screen used for selecting the task list to access */}
         <Stack.Screen name="Selection" component ={SelectionScreen}/>
         {/* this navigates to the form where a new list can be added */}
         <Stack.Screen name="NewList" component ={NewList}/>
         {/* this navigates to the Task List screen with all task in the list */}
         <Stack.Screen name="ListScreen" component ={ListScreen}/>
        {/* this navigates to the Individual task screen used to update an existing task */}     
         <Stack.Screen name="UpdateTask" component ={IndividualTaskScreen1}/>
         {/* this navigates to the Individual task form used to add a new task */}  
         <Stack.Screen name="NewTask" component ={IndividualTaskScreenNew}/>
       </Stack.Navigator>
    </NavigationContainer>
  );}



