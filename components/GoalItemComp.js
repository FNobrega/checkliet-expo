import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from "moment";

const GoalItemComp = props => {

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} >
                <Text style={styles.textSection}>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
        
    );

};


const styles = StyleSheet.create({
    listItem:{
        padding:20,
        //marginVertical:10,
        margin:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff',
        
      },
      textSection: {
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
});

export default GoalItemComp;