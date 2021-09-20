import React, { useState } from "react";
// import { Dropdown } from "react-native-material-dropdown";
import { Text , Button, View, StyleSheet, Picker} from "react-native";


function SelectionScreen({navigation}){
    
    const [selectedValue, setSelectedValue] = useState("java");
    
    // let data = [{
    //     value: "TaskList1"
    // },
    // {
    //     value: "TaskList2"
    // }]
    
    return (

        <View style = {styles.view}>
            <Text style ={styles.text}> Choose Your Chores </Text>
            
            <View style ={styles.picker}>
               <Picker 
                    
                    selectedValue={selectedValue}
                    style={{ height: 50, width:250 }}
                    onValueChange = {(itemValue) => 
                    setSelectedValue(itemValue)}
                    >

                    <Picker.Item label = "Hovering" value= "hovering" />
                    <Picker.Item label = "Dishes" value= "dishes" />
                    <Picker.Item label = "Laundry" value= "laundry" />
                    <Picker.Item label = "Shopping" value= "shopping" />
                    <Picker.Item label = "Walking Pet" value= "walkingPet" />
                    
                </Picker>
            </View>
            

            {/* <Button title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/> */}
            <Button 
             title="Add new chore to the list" onPress = {() => {navigation.navigate('Home')}}/>
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