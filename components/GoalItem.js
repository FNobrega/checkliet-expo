import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from "moment";

const GoalItem = props => {

    const day = moment().weekday();

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            { (props.mon && day==1) && 
                <View style={styles.listItem} >
                    <Text style={styles.textSection}>{props.title}</Text>
                </View>}
            { (props.tue && day==2) && 
                <View style={styles.listItem} >
                    <Text style={styles.textSection}>{props.title}</Text>
                </View>}
            { (props.wed && day==3) && 
                <View style={styles.listItem} >
                    <Text style={styles.textSection}>{props.title}</Text>
                </View>}
            { (props.thu && day==4) && 
                <View style={styles.listItem} >
                    <Text style={styles.textSection}>{props.title}</Text>
                </View>}
            { (props.fri && day==5) && 
                <View style={styles.listItem} >
                    <Text style={styles.textSection}>{props.title}</Text>
                </View>}
            { (props.sat && day==6) && 
                <View style={styles.listItem} >
                    <Text style={styles.textSection}>{props.title}</Text>
                </View>}
            { (props.sun && day%7==0) && 
                <View style={styles.listItem} >
                    <Text style={styles.textSection}>{props.title}</Text>
                </View>}
    
        </TouchableOpacity>
        
    );

};



const styles = StyleSheet.create({
    listItem:{
        padding:18,
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

export default GoalItem;
