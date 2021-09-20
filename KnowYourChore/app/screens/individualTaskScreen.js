import React, { useEffect, useState } from "react";
import { Text, Image, SafeAreaView, ImageBackground, StyleSheet, Button, View} from "react-native";

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  task: t.String,
  description: t.maybe(t.String),
  completedBy: t.String,
  location: t.maybe(t.String),
  assignedTo: t.String
});

const options = {
  fields: {
    task: {
      error: 'This field must be completed'
    },
    completedBy: {
      error: 'This field must be completed'
    },
    assignedTo: {
      error: 'This field must be completed',
    },
  },
};

function IndividualTaskScreen ({navigation}) {

  handleSubmit = () => {
    const value = this._form.getValue();
  }

    return(
        <View>
            <Text> Selected Task </Text>
            <Form ref = {task1 => this._form = task1} type={user} />
            <Button title = "Save Changes" onPress = {this.handleSubmit} />
            <Button title = "Go back to Task List 1" onPress={() => {navigation.push('ListScreen')}} />
        </View>
    )
}

export default IndividualTaskScreen;