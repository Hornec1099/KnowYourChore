import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useLinkProps } from "@react-navigation/native";
import { globalStyles } from "../styles/global";

export default function IndividualTaskScreen1( {editTask} ) {

    return(
        <View style={globalStyles.background}>
            <Formik
                initialValues={{ task: '', description: '', completedBy: '', location: '', assignedTo: '' }}
                onSubmit= { (values, actions) => {
                    // actions.resetForm();
                    editTask(values);
                    // console.log(values);
                    
                }}
            >
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