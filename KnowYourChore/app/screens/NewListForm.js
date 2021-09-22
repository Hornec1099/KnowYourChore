import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import taskService from "../services/tasksService";
import { globalStyles } from "../styles/global";



export default function NewList({navigation}) {

    const handleSubmit = (values) =>{
        taskService.addTaskList(values)
        navigation.replace('Selection')
       
    }

    return(
        <View style={globalStyles.background}>
            {/* Form component defining form */}
            <Formik
                initialValues={ {
                    listName : '',
                    taskList : []
                }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                }}>

                {/* inside form with each field element */}
                {(formikprops) => (
                    <View>
                        <Text style={globalStyles.headings}> Add New List </Text>

                            <TextInput 
                                style={globalStyles.input}
                                placeholder='Name Of List'
                                onChangeText={formikprops.handleChange('listName')}
                                value={formikprops.values.listName}
                            />

                            <Button  title= 'Submit New List' onPress={formikprops.handleSubmit} />

                        </View>
                )}
            </Formik>
        </View>
    )

}