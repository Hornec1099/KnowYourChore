import React, {useState, useEffect}  from "react";
import { Text, FlatList, Button, View, StyleSheet, ScrollView} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Pressable } from "react-native";


function ListScreen ({navigation, route}) {

    const [checkedState , setCheckedState] = useState(false)
    const task = route.params
  


      const renderItem = ({ item}) => {
    return (

    <View style ={style.taskContainer}>
        <BouncyCheckbox 
        fillColor="green" unfillColor="red"  
        isChecked = {checkedState} 
        onPress= { ({checkedState}) => { setCheckedState(!checkedState)}} />
        
        <Pressable style = {style.pressableTasks} onPress={() => {navigation.push("IndividualTaskScreen", item)}}>
            <Text>{item.taskName}</Text>
        </Pressable>

        <Pressable style = {style.pressableDelete} onPress={() =>{console.log("delete goes here")}}>
            <Text> Remove </Text>
        </Pressable>

    </View>
    )
  }

    return (
        <View style ={style.all}> 
        <Text style={style.header}> {task.listName} </Text>

        {/* List container with tasks */}
        <View>
         <FlatList
           data={task.taskList}
           keyExtractor={(task)  => `${task.id}`}
           renderItem={ renderItem } />
        </View>

        <View>
        {/* button to navigate to selection */}
        <Pressable style = {style.pressableButtons} onPress={() => {navigation.push("Selection")}}>
            <Text style ={style.text }> Back to Selection </Text>
        </Pressable>

        {/* button to navigate to form for new task */}
        <Pressable style = {style.pressableButtons} onPress={() => {navigation.push("IndividualTaskScreen")}}>
            <Text style ={style.text }> Add New Task </Text>
        </Pressable>

        </View>
        </View>
    )
}

const style = StyleSheet.create({
    all:{
        backgroundColor:"white",
        flex:1  
    },
    header:{
        fontSize:26,
        color:"black",
        textDecorationLine:"underline",
        textAlign:"center"
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
    pressableDelete:{
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        marginLeft:100,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'lightcoral',
    },
    pressableTasks:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 0,
        borderRadius: 25,
        elevation: 10,
        backgroundColor: 'lightblue',
        flex:1
    },
    text:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    taskContainer:{
        flexDirection:"row",
        margin:5,
        justifyContent:"space-between"
    }
})

export default ListScreen;