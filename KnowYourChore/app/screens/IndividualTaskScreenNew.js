import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useLinkProps } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import taskService from "../services/tasksService";

export default function IndividualTaskScreenNew( {route,navigation} ) {
    
    // params passed from previous page on application
    const {taskId} = route.params

    
    // handles submission of Form data to update DB and navigate to List page
    const handleSubmit = (values) =>{
        taskService.addTask(values, taskId)
        navigation.replace('ListScreen', {_id: taskId})
       
    }

    
    return(
        <View style={globalStyles.background}>
            {/* Form component defining form */}
            <Formik
                
                initialValues={{ taskName: '' , taskDescription: '' , taskCompleteBy: '', taskLocation: '', taskAssignedTo: '' }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                    console.log(values)
                }}>
                    {/* inside form with each field element */}
                {(formikprops) => (
                    <View>
                        <Text style={globalStyles.headings}> Add Task </Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Task'
                            onChangeText={formikprops.handleChange('taskName')}
                            value={formikprops.values.taskName}
                        />

                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Task Description'
                            onChangeText={formikprops.handleChange('taskDescription')}
                            value={formikprops.values.taskDescription}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Completed By'
                            onChangeText={formikprops.handleChange('taskCompleteBy')}
                            value={formikprops.values.taskCompleteBy}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Location'
                            onChangeText={formikprops.handleChange('taskLocation')}
                            value={formikprops.values.taskLocation}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Assigned To'
                            onChangeText={formikprops.handleChange('taskAssignedTo')}
                            value={formikprops.values.taskAssignedTo}
                        />
                        <Button style={globalStyles.button} title= 'Save Changes' onPress={formikprops.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}