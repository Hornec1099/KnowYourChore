import React, {useState, useEffect}  from "react";
import { Text , Button, View, StyleSheet} from "react-native";
import taskService from "../services/tasksService"
import {Picker} from '@react-native-community/picker';
import { Pressable } from "react-native";


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
        return( <Picker.Item label ={taskList.listName} value ={taskList} key ={taskList.id} /> )
    })
    

    return (

        <View style = {styles.view}>
            <Text style ={styles.text}> Choose Your Chores </Text>
            
            <View style ={styles.picker}>
               <Picker 
                    prompt="Choose a List"
                    selectedValue={selectedValue}
                    style={{ height: 50, width:250 }}
                    onValueChange = {handleValueChange} > 

                   {renderTasks}

                </Picker>
                </View>
                
                <Pressable style = {styles.pressableButtons} onPress={() => {navigation.push("ListScreen", selectedValue  )}}>
                    <Text>Go to List</Text>
                </Pressable>

        </View>
    )
}




const styles = StyleSheet.create({
    view:{
        alignItems: "center",
       justifyContent: "space-around"

    },
    text:{
        
        alignItems: "center",
        fontSize: 25,
        alignContent: "center",
        color: "green",
        padding: 70,
        borderColor: "black",
        borderRadius: 25

    },
    picker:{
        flex: 0.5,
        padding: 40,
        alignItems: "center",
        height: 50,
        width:250,
    },
    pressableButtons:{
        alignItems: 'center',
        alignSelf:'center',
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'lightblue',
    },

   

   


})




export default SelectionScreen;