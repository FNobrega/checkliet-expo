import React, {Component, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Switch, Text } from 'react-native';

const ItemInput = props => {
    const [enteredItem, setEnteredItem] = useState('');

    const itemImputHandler = (enteredText) => {
        setEnteredItem(enteredText);
      };
    const addItemHandler = () => {
      props.onAddItem(
        enteredItem, 
        isMonday, 
        isTuesday, 
        isWednesday, 
        isFriday, 
        isSaturday,
        isSunday,
        isRain,
        isSunny
          );
      setEnteredItem('');
    };

    const [isMonday, setIsMonday] = useState(false);
    const mondayHandler = () =>{
      if(isMonday) {setIsMonday(false);}
      else {setIsMonday(true);}
    };

    const [isTuesday, setIsTuesday] = useState(false);
    const tuesdayHandler = () =>{
      if(isTuesday) {setIsTuesday(false);}
      else {setIsTuesday(true);}
    };

    const [isWednesday, setIsWednesday] = useState(false);
    const wednesdayHandler = () =>{
      if(isWednesday) {setIsWednesday(false);}
      else {setIsWednesday(true);}
    };

    const [isThursday, setIsThursday] = useState(false);
    const thursdayHandler = () =>{
      if(isThursday) {setIsThursday(false);}
      else {setIsThursday(true);}
    };

    const [isFriday, setIsFriday] = useState(false);
    const fridayHandler = () =>{
      if(isFriday) {setIsFriday(false);}
      else {setIsFriday(true);}
    };

    const [isSaturday, setIsSaturday] = useState(false);
    const saturdayHandler = () =>{
      if(isSaturday) {setIsSaturday(false);}
      else {setIsSaturday(true);}
    };

    const [isSunday, setIsSunday] = useState(false);
    const sundayHandler = () =>{
      if(isSunday) {setIsSunday(false);}
      else {setIsSunday(true);}
    };

    const [isRain, setIsRain] = useState(false);
    const rainHandler = () =>{
      if(isRain) {setIsRain(false);}
      else {setIsRain(true);}
    };

    const [isSunny, setIsSunny] = useState(false);
    const sunnyHandler = () =>{
      if(isSunny) {setIsSunny(false);}
      else {setIsSunny(true);}
    };

    const [isAll, setIsAll] = useState(false);
    const allHandler = () =>{
      if(isAll) {
        setIsMonday(false);
        setIsTuesday(false);
        setIsWednesday(false);
        setIsThursday(false);
        setIsFriday(false);
        setIsSaturday(false);
        setIsSunday(false);
        setIsAll(false);
      }
      else {
        setIsMonday(true);
        setIsTuesday(true);
        setIsWednesday(true);
        setIsThursday(true);
        setIsFriday(true);
        setIsSaturday(true);
        setIsSunday(true);
        setIsAll(true);
      }
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
          <View style={styles.filterBlock}>
            <View style={styles.filterCountainer}> 
              <Text>Segunda </Text>
              <Switch 
                value={isMonday}
                onValueChange={mondayHandler}
              />
            </View>
            <View style={styles.filterCountainer}> 
              <Text>Terça </Text>
              <Switch 
                value={isTuesday}
                onValueChange={tuesdayHandler}
              />
            </View>
          </View>
          <View style={styles.filterBlock}>
            <View style={styles.filterCountainer}> 
              <Text>Quarta </Text>
              <Switch 
                value={isWednesday}
                onValueChange={wednesdayHandler}
              />
            </View>
            <View style={styles.filterCountainer}> 
              <Text>Quinta </Text>
              <Switch 
                value={isThursday}
                onValueChange={thursdayHandler}
              />
            </View>
          </View>
          <View style={styles.filterBlock}>
            <View style={styles.filterCountainer}> 
              <Text>Sexta </Text>
              <Switch 
                value={isFriday}
                onValueChange={fridayHandler}
              />
            </View>
            <View style={styles.filterCountainer}> 
              <Text>Sabado </Text>
              <Switch 
                value={isSaturday}
                onValueChange={saturdayHandler}
              />
            </View>
          </View>
          <View style={styles.filterBlock}>
            <View style={styles.filterCountainer}> 
              <Text>Domingo </Text>
              <Switch 
                value={isSunday}
                onValueChange={sundayHandler}
              />
            </View>
            <View style={styles.filterCountainer}> 
              <Text>Dia de chuva </Text>
              <Switch 
                value={isRain}
                onValueChange={rainHandler}
              />
            </View>
          </View>
          <View style={styles.filterBlock}>
            <View style={styles.filterCountainer}> 
              <Text>Dia de Sol </Text>
              <Switch 
                value={isSunny}
                onValueChange={sunnyHandler}
              />
            </View>
            <View style={styles.filterCountainer}> 
              <Text>Todos os Dias </Text>
              <Switch 
                value={isAll}
                onValueChange={allHandler}
              />
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
        backgroundColor: '#ececec',
        borderColor: '#A9A9A9', 
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
      filterCountainer:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
      },
      filterBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'80%',
      },
});


export default ItemInput;