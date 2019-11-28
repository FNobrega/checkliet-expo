import React, {useState} from 'react';
import { 
  StyleSheet,  
  View, 
  Button,  
  FlatList,
  Picker,
  Text,
  Switch, 
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalItemComp from './components/GoalItemComp';
import ItemInput from './components/ItemInput';
import { isConfigurationAvailable } from 'expo/build/AR';



export default function App() {


  const [enteredItem, setEnteredItem] = useState('');

  const [courseItems, setCourseItems] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const [isComplete, setIsComplete] = useState(true);
  const completeHandler = () =>{
      if(isComplete) {setIsComplete(false);}
      else {setIsComplete(true);}
      //this.forceUpdate();
    };
  
  const addItemHandler = (
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
    ) => {
    setCourseItems( currentItems => [
      ...currentItems, 
      { id: Math.random().toString(), 
        key: Math.random().toString(), 
        value: enteredItem,
        mon:isMonday,
        tue:isTuesday, 
        wed:isWednesday, 
        thu:isThursday,
        fri:isFriday,
        sat:isSaturday,
        sun:isSunday,
        rain:isRain,
        sunny:isSunny,
        today:isToday,
        complete:true,
      }]);
      setIsAddMode(false);
  };

  const removeItemHandler = itemId => {
    setCourseItems( currentItems => {
      return currentItems.filter((item) => item.id !==itemId);
    });
  };

  const cancelItemAddInitialHandler = () =>{
    setIsAddMode(false);
  };
  
  return (
    <View style={styles.streen}>
      <View style={styles.head}> 
        <View style={styles.viewHeader}>
          <Text style={styles.titleText}>CheckList ✓</Text>
        </View>
        <View backgroundColor= "#4CAF50"  width="10%">
          <Button  fontSize='22' color='white' size='22' title="+" onPress={() => setIsAddMode(true)} />
        </View>
      </View>
        <View style={styles.filterCountainer}> 
          <Text style={styles.texto}>Itens do dia</Text>
          <Switch 
            value={isComplete}
            onValueChange={completeHandler}
          />
          <Text style={styles.texto} >Lista Completa</Text>
        </View>
      <ItemInput 
        visible={isAddMode} 
        onAddItem={addItemHandler} 
        onCancel={cancelItemAddInitialHandler}
      />
      
      <FlatList 
        style={styles.list}
        data={courseItems}
       
        renderItem={itemData =><View>{isComplete ? <GoalItemComp
        id={itemData.item.id} 
        onDelete={removeItemHandler} 
        title={itemData.item.value} 
        today={itemData.item.today}
        mon={itemData.item.mon}
        tue={itemData.item.tue}
        wed={itemData.item.wed}
        thu={itemData.item.thu}
        fri={itemData.item.fri}
        sat={itemData.item.sat}
        sun={itemData.item.sun}
        />: <GoalItem
        id={itemData.item.id} 
        onDelete={removeItemHandler} 
        title={itemData.item.value} 
        today={itemData.item.today}
        mon={itemData.item.mon}
        tue={itemData.item.tue}
        wed={itemData.item.wed}
        thu={itemData.item.thu}
        fri={itemData.item.fri}
        sat={itemData.item.sat}
        sun={itemData.item.sun}
        />
        }</View>
        
      } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  streen:{
    backgroundColor: '#ececec',
    height:'100%',
  },
  head:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    paddingTop:25,
    paddingBottom:10,
    paddingHorizontal:10,

  },
  list:{
    padding:30,
    marginBottom: 50,
  },
  titleText: {
    //type='clear',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  texto: {
    padding: 15,
    //fontSize:18,
    color:'#000',
    fontWeight: 'bold',
  },
  filterCountainer:{
    padding:15,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center',
  },
  filterBlock:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  buttonAdd: {
    color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
  },
  viewHeader: {
  }

  
  
});

