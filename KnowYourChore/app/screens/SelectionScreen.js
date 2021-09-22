import React, {useState, useEffect}  from "react";
import { Text , Button, View, StyleSheet} from "react-native";
import taskService from "../services/tasksService"
import {Picker} from '@react-native-community/picker';
import { Pressable } from "react-native";
import {selectionStyles} from '../styles/SelectionStyles'


function SelectionScreen({navigation}){
    
    const [selectedValue, setSelectedValue] = useState("");
    const [taskLists , setTaskLists] = useState([])
    
    // gets all task information from data set getting actual task List names and not individual tasks
    const getAllTasks =  () => {
        taskService.getTasks()
        .then(data => {setTaskLists(data)})
        .catch(error => {console.error(error)})
    }

    // use effect to call tasks on rendering
    useEffect(() => {
        console.log("useEffect called in selection")
       getAllTasks()
       }, []);

    //    used within the Picker to change selected value
     const handleValueChange = (itemValue) => {
         setSelectedValue(itemValue);
     }
      
    //  renders all options available that will then be used in Picker
    let renderTasks = taskLists.map((taskList) => {
        return( <Picker.Item label ={taskList.listName} value ={taskList} key ={taskList._id} /> )
    })
    

    return (

        <View style = {selectionStyles.view}>
            <Text style ={selectionStyles.text}> Choose Your Chores </Text>
            
            <View style ={selectionStyles.pickerView}>
               <Picker 
                    style = {{height: 50, width:250, color: 'black'}} 
                    prompt="Choose a List"
                    selectedValue={selectedValue}
                    
                    onValueChange = {handleValueChange} > 

                   {renderTasks}

                </Picker>
                </View>
                <View>
                <Pressable style = {selectionStyles.pressableButtons} onPress={() => {navigation.push("ListScreen", selectedValue  )}}>
                    <Text style = {selectionStyles.buttonText}>Go To List</Text>
                </Pressable>

                <Pressable style = {selectionStyles.pressableButtons} onPress={() => {navigation.push("NewList")}}>
                    <Text style ={selectionStyles.buttonText}> Add New List</Text>
                </Pressable>
                </View>

        </View>
    )
}

export default SelectionScreen;