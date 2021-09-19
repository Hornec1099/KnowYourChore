import React, {useState}  from "react";
import { Text, FlatList, Button, View, StyleSheet} from "react-native";
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
        "taskName":"Clean"
    }]

      const renderItem = ({ item }) => {
    return (
    <View style ={style.taskContainer}>
        <BouncyCheckbox 
        fillColor="orange" unfillColor="darkorange"  
        isChecked = {checkedState} 
        onPress= { ({checkedState}) => { setCheckedState(!checkedState)}} />
        <Pressable style = {style.pressableTasks} onPress={() => {navigation.push("Detail")}}>
            <Text>{item.taskName}</Text>
        </Pressable>
        <Pressable style = {style.pressableDelete} onPress={() =>{console.log("delete goes here")}}>
            <Text> Remove
            </Text>
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
        <Pressable style = {style.pressableButtons} onPress={() => {navigation.push("Home")}}>
            <Text style ={style.text }>Go To Home </Text>
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
        width:150,
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
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
        paddingHorizontal: 15,
        borderRadius: 25,
        elevation: 10,
        backgroundColor: 'lightblue',
        flex:1
    },
    markComplete:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'lightblue',
        textDecorationLine:"line-through",
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