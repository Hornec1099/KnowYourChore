import React, {useState, useEffect}  from "react";
import { Text, FlatList, View} from "react-native";
import { Pressable } from "react-native";

import {listStyle} from "../styles/listStyles"

import BouncyCheckbox from "react-native-bouncy-checkbox";
import taskService from "../services/tasksService"


function ListScreen ({navigation, route}) {

    const [checkedState , setCheckedState] = useState(false)
    const [taskList, setTaskList] = useState({})  

    

// used to retrieve existing data before wiping once shown
    useEffect(() => {
        console.log("useEffect called in list screen")
        getTaskList(route.params._id)
        
    }, []);

    // called to get the taskList data to Shown as FlatList
    const getTaskList = (id) =>{
        taskService.getIndividualTask(id)
        .then(data => {setTaskList(data)})
        .catch((err) => {console.error(err)})
    }

    // used to Handle the deletion of a task
    const handleDelete = (task) => {
        taskService.deleteTask(task, taskList._id);
        navigation.replace('ListScreen', taskList)
    }

      const renderItem = ({ item}) => {
    return (

    <View style ={listStyle.individualTaskContainer}>

        <BouncyCheckbox 
        fillColor="#028900" unfillColor= "#cc3000"  
        isChecked = {checkedState} 
        onPress= { ({checkedState}) => { setCheckedState(!checkedState)}} />

        {/* <View style ={listStyle.taskPressableCont}> */}
        <Pressable style = {listStyle.pressableTasks} onPress={() => {navigation.navigate("UpdateTask", {task :item, taskId:taskList._id})}}>
            <Text style = {listStyle.buttonTextTask}>{item.taskName}</Text>
        </Pressable>
        {/* </View> */}

        {/* <View> */}
        <Pressable style = {listStyle.pressableDelete} onPress={() =>{handleDelete(item)}}>
            <Text style= {listStyle.buttonTextDelete}> Remove </Text>
        </Pressable>
        {/* </View> */}

    </View>
    )
  }



    return (
        <View style ={listStyle.all}> 
        <Text style={listStyle.header}> {taskList.listName} </Text>

        {/* List container with tasks */}
        
         <FlatList
            contentContainerStyle={{overflow:'hidden'}}
           data={taskList.taskList}
           keyExtractor={(task)  => `${task.taskName}`}
           renderItem={ renderItem } />
       

        <View>
        {/* button to navigate to selection */}
        <Pressable style = {listStyle.pressableButtons} onPress={() => {navigation.navigate("Selection")}}>
            <Text style ={listStyle.buttonText }> Back to Selection </Text>
        </Pressable>

        {/* button to navigate to form for new task */}
        <Pressable style = {listStyle.pressableButtons} onPress={() => {navigation.navigate("NewTask", {taskId: taskList._id})}}>
            <Text style ={listStyle.buttonText }> Add New Task </Text>
        </Pressable>

        </View>
        </View>
    )
}

export default ListScreen;