import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text, Pressable } from "react-native";
import { Formik } from "formik";
import { useLinkProps } from "@react-navigation/native";
import { formStyles } from "../styles/formStyles";
import taskService from "../services/tasksService";


export default function IndividualTaskScreen1( {editTask, route, navigation} ) {
    
    const {task, taskId} = route.params


    const handleSubmit = (values) =>{
        taskService.updateTask(values, taskId)
        navigation.replace('ListScreen', {_id: taskId})
       
    }
    
    return(
        <View style={formStyles.background}>
            <Formik
                
                initialValues={{taskName: task.taskName , taskDescription: task.taskDescription, taskCompleteBy: task.taskCompleteBy, taskLocation: task.taskLocation, taskAssignedTo: task.taskAssignedTo }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                }}>

                {(formikprops) => (
                    <View style={formStyles.formBackground}>
                        <Text style={formStyles.headings}> Update Task </Text>
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Task'
                            onChangeText={formikprops.handleChange('taskName')}
                            value={formikprops.values.taskName}
                        />

                        <TextInput 
                            multiline
                            style={formStyles.input}
                            placeholder='Task Description'
                            onChangeText={formikprops.handleChange('taskDescription')}
                            value={formikprops.values.taskDescription}
                        />

                        <TextInput 
                            style={formStyles.input}
                            placeholder='Completed By'
                            onChangeText={formikprops.handleChange('taskCompleteBy')}
                            value={formikprops.values.taskCompleteBy}
                        />

                        <TextInput 
                            style={formStyles.input}
                            placeholder='Location'
                            onChangeText={formikprops.handleChange('taskLocation')}
                            value={formikprops.values.taskLocation}
                        />

                        <TextInput 
                            style={formStyles.input}
                            placeholder='Assigned To'
                            onChangeText={formikprops.handleChange('taskAssignedTo')}
                            value={formikprops.values.taskAssignedTo}
                        />
                        <Pressable
                                style = {formStyles.button}
                                title= 'Save Changes' onPress={formikprops.handleSubmit} >
                                <Text style = {formStyles.textbutton}>Save Changes</Text>
                            </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    )
}