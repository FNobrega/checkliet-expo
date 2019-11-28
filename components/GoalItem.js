import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    const returnDay = () =>{
        console.log("aqui!!");
        console.log(new Date());
        return (new Date());
        //props.title
      };
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            {returnDay && 
                <View style={styles.listItem} >
                    <Text>{props.title}</Text>
                </View>
            }
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
        fontSize: 18,
      },
});

export default GoalItem;