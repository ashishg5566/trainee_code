import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const ingredientList = [
  {
    id: 1,
    name: 'Akash Sharma',
    desig:'(student)',
    selected: false,
  },
  {
    id: 2,
    name: 'Prashant Choudhary',
    desig:'(Teacher)',
    selected: false,
  },
  {
    id: 3,
    name: 'Amit Kumat',
    desig:'(Student)',
    selected: false,
  },
  {
    id: 4,
    name: 'Tarun Sharma',
    desig:'(Teacher)',
    selected: false,
  },
  {
    id: 5,
    name: 'Akash Sharma',
    desig:'(student)',
    selected: false,
  },
  {
    id: 6,
    name: 'Prashant Choudhary',
    desig:'(Teacher)',
    selected: false,
  },
  {
    id: 7,
    name: 'Amit Kumat',
    desig:'(Student)',
    selected: false,
  },
  {
    id: 8,
    name: 'Tarun Sharma',
    desig:'(Teacher)',
    selected: false,
  },
  {
    id: 9,
    name: 'Amit Kumat',
    desig:'(Student)',
    selected: false,
  },
  {
    id: 10,
    name: 'Tarun Sharma',
    desig:'(Teacher)',
    selected: false,
  },
  
];
const Task6: FC = ({navigation}) => {
   const [selectedItem, setSelectedItem] = useState(null);
   const [allItems, setAllItems] = useState(ingredientList);

    const selectedIngredient = (item) => {
    console.log('selecionado: ' + item.name);
    setSelectedItem(item);
    let temp = allItems.filter((parentItem) => parentItem.id !== item.id);
    item.selected = !item.selected;
    temp = temp.concat(item);
    temp.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    setAllItems(temp);
    console.log(allItems);
  };
  return (
    <View style={styles.container}>
         <View style={styles.header}>
                <View> 
                <TouchableOpacity  onPress={() => navigation.goBack()} >
                    <Icon name="arrow-left" size={20}  color="white" />
                    </TouchableOpacity>
                </View>
                 <View> 
                    <Text style={styles.headerTitle}>Create Group Chat</Text>
                 </View>
                  <View>
                    <Icon name="search" size={20}  color="white"/>
                 </View>
             </View>
            <FlatList
              style={styles.flatlist}
               bounces={false}
               data={allItems}
               renderItem={({ item }) => (
                          <TouchableOpacity
                               style={styles.flatListItem}
                               key={item.id}
                               onPress={() => selectedIngredient(item)}>
                               <View style={styles. flatlistcontainer}>
                                   <View style={{flexDirection:'row',alignItems:'center'}}> 
                                      <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.flatlistimage}  /> 
                                          <View style={styles.flatlisttext}> 
                                               <Text style={{fontSize:16}}>{item.name}</Text>
                                               <Text style={styles.desigtext}>{item.desig}</Text>
                                          </View>
                                    </View>
                                     {!item.selected ? ( 
                                        
                                        <Icon name='check' size={20}color="#ecf0f1"/>
                                      ) : (
                                     
                                        <Icon name='check'  size={16}  color="white" style={styles.selecticon}/>
                                         )}
                                   </View>
                                    <View style={styles.flatlistborder}></View>
                           </TouchableOpacity>
                                )}
                           keyExtractor={(item) => item.index}
                          />
           </View>
  );
}
export default Task6;