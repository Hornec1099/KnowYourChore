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
        return( <Picker.Item label ={taskList.listName} value ={taskList} key ={taskList._id} /> )
    })
    

    return (

        <View style = {styles.view}>
            <Text style ={styles.text}> Choose Your Chores </Text>
            
            <View style ={styles.pickerView}>
               <Picker 
                    style = {{height: 50, width:250, color: 'black'}} 
                    itemstyle = {{backgroundColor: 'white', borderColor: '#0044b4', borderWidth: 100}}
                    prompt="Choose a List"
                    selectedValue={selectedValue}
                    
                    onValueChange = {handleValueChange} > 

                   {renderTasks}

                </Picker>
                </View>
                
                <Pressable style = {styles.pressableButtons} onPress={() => {navigation.push("ListScreen", selectedValue  )}}>
                    <Text style = {styles.buttonText}>Go to List</Text>
                </Pressable>

                <Pressable style = {styles.pressableButtons} onPress={() => {navigation.push("NewList")}}>
                    <Text style ={styles.buttonText}> Add New List</Text>
                </Pressable>

        </View>
    )
}




const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
       justifyContent: "space-around",
       backgroundColor: 'white',
       flex: 1,
       borderWidth: 10, 
       borderColor: '#0044b4',
    },
    text:{
        
        alignItems: "center",
        fontSize: 30,
        alignContent: "center",
        color: '#0044b4',
        padding: 20,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed'
    },
    pickerView:{
        alignItems: "center",
        height: 50,
        width: 300,
        backgroundColor: 'lightgrey',
        borderColor: '#0044b4',
        borderWidth: 2,
        borderRadius: 25,
        
       
    },
    pressableButtons:{
        alignItems: 'center',
        alignSelf:'center',
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0044b4',
        bottom: 20,
        height: 50,
        
    },
    buttonText: {
        color:"#fff",
        fontWeight: "bold",
        textAlign: 'center',
        fontFamily: 'notoserif'
    }

   

   


})




export default SelectionScreen;