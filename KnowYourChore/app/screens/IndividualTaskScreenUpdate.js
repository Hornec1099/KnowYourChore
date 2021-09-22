import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useLinkProps } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import taskService from "../services/tasksService";

export default function IndividualTaskScreenUpdate( {editTask, route, navigation} ) {
    
    const {task, taskId} = route.params

    console.log(taskId)


    const handleSubmit = (values) =>{
        const updateTask = taskService.updateTask(values, taskId)
        taskService.updateTask(values, taskId)
        navigation.replace('ListScreen', {_id: taskId})
       
    }
    
    return(
        <View style={globalStyles.background}>
            <Formik
                
                initialValues={{taskName: task.taskName , description: task.taskDescription, completedBy: task.taskCompleteBy, location: task.taskLocation, assignedTo: task.taskAssignedTo }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                    // editTask(values);
                    // console.log(values);
                }}>

                {(formikprops) => (
                    <View>
                        <Text style={globalStyles.headings}> Update Task </Text>
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
                            onChangeText={formikprops.handleChange('description')}
                            value={formikprops.values.description}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Completed By'
                            onChangeText={formikprops.handleChange('completedBy')}
                            value={formikprops.values.completedBy}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Location'
                            onChangeText={formikprops.handleChange('location')}
                            value={formikprops.values.location}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Assigned To'
                            onChangeText={formikprops.handleChange('assignedTo')}
                            value={formikprops.values.assignedTo}
                        />
                        <Button style={globalStyles.button} title= 'Save Changes' onPress={formikprops.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}