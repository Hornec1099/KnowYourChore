import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from "./screens/ListScreen";
import SelectionScreen from "./screens/SelectionScreen";
import HomePage from "./screens/HomePage";
import individualTaskScreen from "./screens/individualTaskScreen";


const Stack = createNativeStackNavigator();  


export default function App() {

  
  return (
    // this is th home base for our navigation technology
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component ={HomePage}/>
         <Stack.Screen name="ListScreen" component ={ListScreen}/>
         <Stack.Screen name="Selection" component ={SelectionScreen}/>
         <Stack.Screen name="Detail" component ={individualTaskScreen} options={ ({route}) => ({title : route.params.taskName})}/>
       </Stack.Navigator>
    </NavigationContainer>
  );}



  // const [tasks, setTasks] = useState([]);
  

  // const getAllTasks = async () => {
  //     const response = await taskService.getTasks();
  //     setTasks(response);
  // };

  // useEffect(() => {
  //   getAllTasks();
  // }, []);
