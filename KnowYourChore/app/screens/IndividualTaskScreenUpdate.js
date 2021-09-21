import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useLinkProps } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import taskService from "../services/tasksService";

export default function IndividualTaskScreen1( {editTask, route, navigation} ) {
    
    const {task, taskId} = route.params

    console.log(taskId)


    const handleSubmit = (values) =>{
        
        taskService.addTask(values, taskId)
        navigation.replace('ListScreen', {_id: taskId})
       
    }
    
    return(
        <View style={globalStyles.background}>
            <Formik
                
                initialValues={{taskName: task.taskName , taskDescription: task.taskDescription, taskCompleteBy: task.taskCompleteBy, taskLocation: task.taskLocation, taskAssignedTo: task.taskAssignedTo }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                   
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