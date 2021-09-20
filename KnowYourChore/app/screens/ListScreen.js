import React, {useState}  from "react";
import { Text, FlatList, Button, View, StyleSheet, ScrollView} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Pressable } from "react-native";

function ListScreen ({navigation}) {

    const [checkedState , setCheckedState] = useState(false)
    
    const changeButtonStyling = (state)=>{
        if (state = false){return style.pressableTasks}
        else{ return style.markComplete}
    }

    let data = [{
        "id":1,
        "taskName":"Vacuum"
    },
    {
        "id":2,
        "taskName":"Wash"
    },
    {
        "id":3,
        "taskName":"Fold Clothes" 
    },
    {
        "id":4,
        "taskName":"Fold Clothes" 
    },
    {
        "id":5,
        "taskName":"Fold Clothes" 
    },
    {
        "id":6,
        "taskName":"Fold Clothes" 
    },
    {
        "id":7,
        "taskName":"Fold Clothes" 
    },
    {
        "id":8,
        "taskName":"Fold Clothes" 
    },
    {
        "id":9,
        "taskName":"Fold Clothes" 
    },
    {
        "id":10,
        "taskName":"Fold Clothes" 
    },
    {
        "id":11,
        "taskName":"Fold Clothes" 
    },
    {
        "id":12,
        "taskName":"Fold Clothes" 
    },
    {
        "id":13,
        "taskName":"Fold Clothes" 
    },
    {
        "id":14,
        "taskName":"Fold Clothes" 
    },
    {
        "id":15,
        "taskName":"Fold Clothes" 
    },
    {
        "id":16,
        "taskName":"Fold Clothes" 
    },
    {
        "id":17,
        "taskName":"Fold Clothes" 
    },
    {
        "id":18,
        "taskName":"Clean"
    }]

      const renderItem = ({ item, checkedState }) => {
    return (
    <View style ={style.taskContainer}>
        <BouncyCheckbox 
        fillColor="orange" unfillColor="darkorange"  
        isChecked = {checkedState} 
        onPress= { ({checkedState}) => { setCheckedState(!checkedState)}} />
        <Pressable style = {style.pressableTasks} onPress={() => {navigation.push("IndividualTaskScreen")}}>
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
        <Text style={style.header}> Task List Name Here </Text>
        {/* List container with tasks */}
        <View>
         <FlatList
           data={data}
           keyExtractor={(task)  => task.id.toString()}
           renderItem={ renderItem } />
        </View>
        <View>
        {/* button to navigate to home page */}
        <Pressable style = {style.pressableButtons} onPress={() => {navigation.push("Selection")}}>
            <Text style ={style.text }> Back to Selection </Text>
        </Pressable>
        {/* button to navigate to form for new task list */}
        <Pressable style = {style.pressableButtons} onPress={() => {navigation.push("Detail")}}>
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