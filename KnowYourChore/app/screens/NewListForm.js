import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text, Pressable } from "react-native";
import { Formik } from "formik";
import taskService from "../services/tasksService";
// import { globalStyles } from "../styles/global";



export default function NewList({navigation}) {

    const handleSubmit = (values) =>{
        taskService.addTaskList(values)
        navigation.replace('Selection')
       
    }

    return(
        <View style={newListStyles.background}>
            {/* Form component defining form */}
            <Formik
                style = {newListStyles.formik}
                initialValues={ {
                    listName : '',
                    taskList : []
                }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                }}>

                {/* inside form with each field element */}
                {(formikprops) => (
                    <View style={newListStyles.formBackground}>
                        <Text style={newListStyles.headings}> Add New List </Text>

                            <TextInput 
                                style={newListStyles.input}
                                placeholder='Name Of List'
                                onChangeText={formikprops.handleChange('listName')}
                                value={formikprops.values.listName}
                            />

                            <Pressable
                                style = {newListStyles.button}
                                title= 'Submit New List' onPress={formikprops.handleSubmit} >
                                <Text style = {newListStyles.textbutton}>Submit new list</Text>
                            </Pressable>
                        

                    </View>
                )}
            </Formik>
        </View>
    )

}

const newListStyles = StyleSheet.create({
    background: {
        alignItems: "center",
        flex: 1,
        justifyContent: "space-evenly",
        

    },


    formBackground: {
        alignItems: "center",
        justifyContent: "space-evenly",
        // backgroundColor: "blue",
        height: 500

    },

    headings: {
        alignItems: "center",
        color: "#1c86ee",
        justifyContent: "space-evenly",
        fontSize:50,
        
        
       

    },

    input: {
        backgroundColor: "yellow",
        alignItems: "center",
        height:50,
        width: 200,
        // alignItems: "center",
        // borderColor: "black"
        
        
    },
    button: {
        backgroundColor: "#1c86ee",
        borderRadius: 15,
        height: 50,
        width: 200,
        alignItems: "center",
        


    },

    textbutton: {
        fontSize: 20,
        color: "#fff"

    }

})

