import React, {useState}  from "react";
import { Text, FlatList, Button, View, StyleSheet} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Pressable } from "react-native";

function ListScreen ({navigation}) {

    const [checkedState , setCheckedState] = useState(false)

    let data = [{
        "id":1,
        "taskName":"Vacuum"
    },
    {
        "id":2,
        "taskName":"Wash"
    }]

      const renderItem = ({ item }) => {
    return (
    <View style ={style.taskContainer}>
        <BouncyCheckbox 
        fillColor="orange" unfillColor="darkorange"  
        isChecked = {checkedState} 
        onPress= { ({checkedState}) => { setCheckedState(!checkedState)}} />
        <Pressable onPress={() => {navigation.push("Detail")}}>
            <Text>{item.taskName}</Text>
        </Pressable>
    </View>
    )
  }

    return (
        <View style ={style.all}> 
        <Text> The ListScreen Page </Text>
         <FlatList
           data={data}
           keyExtractor={(task)  => task.id.toString()}
           renderItem={ renderItem } />
        <Pressable style = {style.pressable} onPress={() => {navigation.push("Home")}}>
            <Text style ={style.text }>Go To Home </Text>
        </Pressable>
        <Pressable style = {style.pressable} onPress={() => {navigation.push("Detail")}}>
            <Text style ={style.text }> Add New Task </Text>
        </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    all:{
        
        alignContent:"center"
    },
    pressable:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'lightblue',
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
    }
})

export default ListScreen;