import React, { useState } from "react";
// import { Dropdown } from "react-native-material-dropdown";
import { Text , Button, View, StyleSheet, Picker} from "react-native";
// import { Ionicons} from '@expo/vector-icons';
// import { Colors } from "react-native/Libraries/NewAppScreen";

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
            {/* dropdown list button goes here */}
            <View style ={styles.picker}>
               <Picker 
                    selectedValue={selectedValue}
                    style={{ height: 50, width:250 }}
                    onValueChange = {(itemValue, itemIndex) => 
                    setSelectedValue(itemValue)}
                    >
                    <Picker.Item label = "Select Chore" />

                    <Picker.Item label = "Hovering" value= "hovering" />
                    <Picker.Item label = "Dishes" value= "dishes" />
                    <Picker.Item label = "Laundry" value= "laundry" />
                    <Picker.Item label = "Shopping" value= "shopping" />
                    <Picker.Item label = "Walking Pet" value= "walkingPet" />



               </Picker>


            </View>
            {/* <Button title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/>
            <Button title="Start New List" onPress = {() => {navigation.navigate('Home')}}/> */}
        </View>

       

    )
}

const styles = StyleSheet.create({
    view:{
        alignItems: "center"

    },
    text:{
        
        alignItems: "center",
        fontSize: 25,
        alignContent: "center",
        color: "green",
        paddingTop:50
    },
    picker:{
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
})




export default SelectionScreen;