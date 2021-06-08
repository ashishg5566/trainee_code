 import React, { useState, useEffect ,FC} from 'react'
 import {View,TextInput} from 'react-native';
 import styles from './styles';
 import {Custombutton} from '../../../components/Custombutton';
 import {ModalComponent} from '../../../components/ModalComponent';
 interface Task10ScreenProps { navigation: any }
 const Task10= (props: Task10ScreenProps) => {
 
    const [ModalVisible, setModalVisible] = useState(false)
    const submit = () => {
         setModalVisible(true)
     };
     return (
         <View style={styles.container}> 
              <ModalComponent isvisible={ModalVisible} modeltype={'bottom'} navigation={props.navigation}
                   onBackdropPress={() => setModalVisible(false)}
                 />
                 <Custombutton title={'Open Model'} onPress={submit} />
                 <View>
     
    </View>
        </View>
     );
 };
 
 export default Task10;
 
 
 
 
 
 
 
 
 
 
  