import React, {useState} from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useLinkProps } from "@react-navigation/native";
import { globalStyles } from "../styles/global";

export default function IndividualTaskScreen1( {editTask, route} ) {
    
    const [formData, setFormData] = useState({})

    const task = route.params

    const handleSubmit = (values) =>{
        setFormData(values)
        
    }

    

    const InitialValues = (task) => {
        if (task != null){ 
            return ({task: task.taskName , description: task.taskDescription, completedBy: task.taskCompleteBy, location: task.taskLocation, assignedTo: task.taskAssignedTo })
        }
        else{
            return ({ task: '' , description: '' , completedBy: '', location: '', assignedTo: '' })
        }
    }
    
    return(
        <View style={globalStyles.background}>
            <Formik
                
                initialValues={InitialValues(task)}
                onSubmit={ (values, actions) => {
                    handleSubmit(values);
                    actions.resetForm();
                    // editTask(values);
                    // console.log(values);
                }}>

                {(formikprops) => (
                    <View>
                        <Text style={globalStyles.headings}> Update Task </Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Task'
                            onChangeText={formikprops.handleChange('task')}
                            value={formikprops.values.task}
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
                        <Button style={globalStyles.button} title= 'Go back to Task List' onPress={() => {navigation.push('ListScreen')}} />
                    </View>
                )}
            </Formik>
        </View>
    )
}