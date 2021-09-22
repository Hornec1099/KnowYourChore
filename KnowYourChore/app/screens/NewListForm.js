import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text, Pressable } from "react-native";
import { Formik } from "formik";
import taskService from "../services/tasksService";
import { formStyles } from "../styles/formStyles";
// import { globalStyles } from "../styles/global";



export default function NewList({navigation}) {

    const handleSubmit = (values) =>{
        taskService.addTaskList(values)
        navigation.replace('Selection')
       
    }

    return(
        <View style={formStyles.background}>
            {/* Form component defining form */}
            <Formik
                style = {formStyles.background}
                initialValues={ {
                    listName : '',
                    taskList : []
                }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                }}>

                {/* inside form with each field element */}
                {(formikprops) => (
                    <View style={formStyles.formBackground}>
                        <Text style={formStyles.headings}> Add New List </Text>

                            <TextInput 
                                style={formStyles.input}
                                placeholder='Name Of List'
                                onChangeText={formikprops.handleChange('listName')}
                                value={formikprops.values.listName}
                            />

                            <Pressable
                                style = {formStyles.button}
                                title= 'Submit New List' onPress={formikprops.handleSubmit} >
                                <Text style = {formStyles.textbutton}>Submit New list</Text>
                            </Pressable>
                        

                    </View>
                )}
            </Formik>
        </View>
    )

}
