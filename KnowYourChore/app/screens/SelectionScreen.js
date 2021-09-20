import React, {useState, useEffect}  from "react";
import { Text , Button, View, StyleSheet} from "react-native";
import taskService from "../services/tasksService"
import {Picker} from '@react-native-community/picker';


function SelectionScreen({navigation}){
    
    const [selectedValue, setSelectedValue] = useState("");
    
    const [tasks , setTasks] = useState([])
    
    const getAllTasks =  () => {
        taskService.getTasks()
        .then(data => {setTasks(data)})
        .catch(error => {console.error(error)})
    }

    useEffect(() => {
        console.log("useEffect called")
       getAllTasks()
       
    }, []);
      

    let renderTasks = tasks.map((task) => {
        return( <Picker.Item label ={task.listName} value ={task._id} key ={task.id} /> )
    })

    return (

        <View style = {styles.view}>
            <Text style ={styles.text}> Choose Your Chores </Text>
            
            <View style ={styles.picker}>
               <Picker 
                    selectedValue={selectedValue}
                    style={{ height: 50, width:250 }}
                    onValueChange = {(itemValue) => 
                    setSelectedValue(itemValue)} > 
                   {renderTasks}
                </Picker>
            </View>
            

            {/* <Button title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/> */}
            <Button 
             title="Add new chore list" onPress = {() => {navigation.navigate('ListScreen')}}/>
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

   

   


})




export default SelectionScreen;