import React, {useState} from 'react';
import { 
  StyleSheet,  
  View, 
  Button,  
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';
import ItemInput from './components/ItemInput';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');

  const [courseItems, setCourseItems] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);
  
  const addItemHandler = enteredItem => {
    setCourseItems( currentItems => [
      ...currentItems, 
      { id: Math.random().toString(), key: Math.random().toString(), value: enteredItem}]);
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
      <Button title="Add new item" onPress={() => setIsAddMode(true)} />
      <ItemInput 
        visible={isAddMode} 
        onAddItem={addItemHandler} 
        onCancel={cancelItemAddInitialHandler}
      />
      <FlatList 
        data={courseItems} 
        renderItem={itemData =><GoalItem id={itemData.item.id} onDelete={removeItemHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  streen:{
   padding:50, 
  },
  
  
});

