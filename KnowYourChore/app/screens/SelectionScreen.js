import React, {useState, useEffect}  from "react";
import { Text , Button, View, StyleSheet} from "react-native";
import taskService from "../services/tasksService"
import {Picker} from '@react-native-community/picker';
import { Pressable } from "react-native";


function SelectionScreen({navigation}){
    
    const [selectedValue, setSelectedValue] = useState("");
    const [taskLists , setTaskLists] = useState([])
    
    const getAllTasks =  () => {
        taskService.getTasks()
        .then(data => {setTaskLists(data)})
        .catch(error => {console.error(error)})
    }

    useEffect(() => {
        console.log("useEffect called")
       getAllTasks()
       
    }, []);

     const handleValueChange = (itemValue) => {
         setSelectedValue(itemValue);
     }
      

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

                <Pressable style = {styles.pressableButtons} onPress={() => {navigation.push("ListScreen", selectedValue)}}>
                    <Text>Go to List</Text>
                </Pressable>

                
            
            
            
            {/* <Button title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/> */}
            {/* <Button 
             title="Add new chore list" onPress = {() => {navigation.navigate('ListScreen')}}/> */}
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