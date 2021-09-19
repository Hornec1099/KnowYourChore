import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useLinkProps } from "@react-navigation/native";

export default function IndividualTaskScreen1() {

    return(
        <View>
            <Formik
                initialValues={{ task: '', description: '', completedBy: '', location: '', assignedTo: '' }}
                onSubmit={ (values) => {
                    // console.log(values);
                }}
            >
                {(formikprops) => (
                    <View style={globalStyles.background}>
                        <Text style={globalStyles.headings}> Update Task </Text>
                        <TextInput 
                            placeholder='Task'
                            onChangeText={formikprops.handleChange('task')}
                            value={formikprops.values.task}
                        />

                        <TextInput 
                            multiline
                            placeholder='Task Description'
                            onChangeText={formikprops.handleChange('description')}
                            value={formikprops.values.description}
                        />

                        <TextInput 
                            placeholder='Completed By'
                            onChangeText={formikprops.handleChange('completedBy')}
                            value={formikprops.values.completedBy}
                        />

                        <TextInput 
                            placeholder='Location'
                            onChangeText={formikprops.handleChange('location')}
                            value={formikprops.values.location}
                        />

                        <TextInput 
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