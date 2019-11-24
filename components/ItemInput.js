import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const ItemInput = props => {
    const [enteredItem, setEnteredItem] = useState('');

    const itemImputHandler = (enteredText) => {
        setEnteredItem(enteredText);
      };
    const addItemHandler = () => {
      props.onAddItem(enteredItem);
      setEnteredItem('');
    };

    return(
      <Modal visible = {props.visible} animationType='slide'>
        <View style={styles.inputCountainer}>
          <TextInput 
            placeholder="Novo item" 
            style={styles.input} 
            onChangeText={itemImputHandler}
            value={enteredItem} 
          />
          <View style={styles.buttonCountainer}> 
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress = {props.onCancel} />
            </View>
            <View style={styles.button}>
              <Button title="ADD" onPress = {addItemHandler}/>
            </View>
          </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputCountainer:{
        //flexDirection: 'row', 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      input:{
        borderColor: 'black', 
        borderWidth: 1, 
        padding:10, 
        width: '80%',
        marginBottom: 10,
      },
      buttonCountainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
      },
      button:{
        width:'40%',
      },
});

export default ItemInput;