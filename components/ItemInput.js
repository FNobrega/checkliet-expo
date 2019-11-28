import moment from "moment";
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
        isThursday, 
        isFriday, 
        isSaturday,
        isSunday,
        isRain,
        isSunny,
        isToday,
          );
      setEnteredItem('');
      todayHandler();
    };

    const [isMonday, setIsMonday] = useState(false);
    const mondayHandler = () =>{
      if(isMonday) {setIsMonday(false);}
      else {setIsMonday(true);
            todayHandler;}
    };

    const [isTuesday, setIsTuesday] = useState(false);
    const tuesdayHandler = () =>{
      if(isTuesday) {setIsTuesday(false);}
      else {setIsTuesday(true);
        todayHandler();}
    };

    const [isWednesday, setIsWednesday] = useState(false);
    const wednesdayHandler = () =>{
      if(isWednesday) {setIsWednesday(false);}
      else {setIsWednesday(true);
        todayHandler();}
    };

    const [isThursday, setIsThursday] = useState(false);
    const thursdayHandler = () =>{
      if(isThursday) {setIsThursday(false);
        todayHandler();}
      else {setIsThursday(true);
        todayHandler();}
    };

    const [isFriday, setIsFriday] = useState(false);
    const fridayHandler = () =>{
      if(isFriday) {setIsFriday(false);}
      else {setIsFriday(true);
        todayHandler();}
    };

    const [isSaturday, setIsSaturday] = useState(false);
    const saturdayHandler = () =>{
      if(isSaturday) {setIsSaturday(false);}
      else {setIsSaturday(true);
        todayHandler();}
    };

    const [isSunday, setIsSunday] = useState(false);
    const sundayHandler = () =>{
      if(isSunday) {setIsSunday(false);}
      else {setIsSunday(true);
        todayHandler();}
    };

    const [isRain, setIsRain] = useState(false);
    const rainHandler = () =>{
      if(isRain) {setIsRain(false);
        todayHandler();}
      else {setIsRain(true);
        todayHandler();}
    };

    const [isSunny, setIsSunny] = useState(false);
    const sunnyHandler = () =>{
      if(isSunny) {setIsSunny(false);
        todayHandler();}
      else {setIsSunny(true);
        todayHandler();}
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
        todayHandler();
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
        todayHandler();
      }

      
    };

    const [isToday, setIsToday] = useState(false);
      const todayHandler = () =>{
        const day = moment().weekday();

        if(day==1 && isMonday){setIsToday(true);}
        else if(day==2 && props.tue){setIsToday(true); }
        else if(day==3 && props.wed){setIsToday(true); }
        else if(day==4 && isThursday){setIsToday(true);}
        else if(day==5 && props.fri){setIsToday(true); }
        else if(day==6 && props.sat){setIsToday(true); }
        else if(day==7 && props.sun){setIsToday(true); }
        else {setIsToday(false); }
        return true;
      };



    return(
      <Modal visible = {props.visible} animationType='slide' >
        <View style={styles.inputCountainer}>
          <TextInput 
            placeholder="Novo item" 
            style={styles.input} 
            onChangeText={itemImputHandler}
            value={enteredItem} 
          />
          <View style={styles.buttonCountainer}>
            <View> 
              <Button title="Cancela" color="#ff6666"  fontWeight='bold'  onPress = {props.onCancel} />
            </View>
            <View style={styles.button }> 
              <Button title="Adiciona" color="#4CAF50" onPress = {addItemHandler}/>
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
              <Text>Chuva </Text>
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
              <Text>Todos </Text>
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
        //backgroundColor: '#ececec',
        borderColor: '#A9A9A9', 
        borderWidth: 1, 
        padding:10, 
        width: '80%',
        marginBottom: 10,
        height: 50,
      },
      buttonCountainer:{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
      },
      button:{
        width:'40%',
      },
      filterCountainer:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
        width:'40%'
      },
      filterBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'80%',
      },
});


export default ItemInput;