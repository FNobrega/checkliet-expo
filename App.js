import React, {useState} from 'react';
import { 
  StyleSheet,  
  View, 
  Button,  
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';
import ItemInput from './components/ItemInput';
import { isConfigurationAvailable } from 'expo/build/AR';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');

  const [courseItems, setCourseItems] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);
  
  const addItemHandler = (
    enteredItem, 
    isMonday, 
    isTuesday, 
    isWednesday, 
    isFriday, 
    isSaturday,
    isSunday,
    isRain,
    isSunny
    ) => {
    setCourseItems( currentItems => [
      ...currentItems, 
      { id: Math.random().toString(), 
        key: Math.random().toString(), 
        value: enteredItem,
        mon:isMonday,
        tue:isTuesday, 
        wed:isWednesday, 
        fri:isFriday,
        sat:isSaturday,
        sun:isSunday,
        rain:isRain,
        Sunny:isSunny,
      }]);
      setIsAddMode(false);
  };
  // const changeMonday = itemId => {
  //   setCourseItems( currentItems => {
  //     if (item.id==itemId) item.monday = true;
  //     return currentItems;

  //   })
  // }

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
        <View style={styles.button}>
          <Button title="CheckList ✓" style={styles.titleText}/>
        </View>
        <View style={styles.button}>
          <Button title="+" onPress={() => setIsAddMode(true)} />
        </View>
      </View>
      <ItemInput 
        visible={isAddMode} 
        onAddItem={addItemHandler} 
        onCancel={cancelItemAddInitialHandler}
      />
      
      <FlatList 
        style={styles.list}
        data={courseItems} 
        renderItem={itemData =><GoalItem id={itemData.item.id} onDelete={removeItemHandler} title={itemData.item.value} 
        sun={itemData.item.sun}
        mon={itemData.item.mon}
        tue={itemData.item.tue}
        wed={itemData.item.wed}
        thu={itemData.item.thu}
        />}
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
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  
  
});

