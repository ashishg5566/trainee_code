 //import liraries
 import 'react-native-gesture-handler';
 import React, { FC} from 'react';
 import {Routes} from './src/router/Index';
 import { View, StatusBar, LogBox, StyleSheet } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import sagas from './src/segas';
import reducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
LogBox.ignoreAllLogs();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(sagas);
 
const App: FC = () => {
     return (
      <NavigationContainer>
      <StatusBar
      
        barStyle="light-content"
      />
      <SafeAreaProvider>
        <View style={styles.container}>
          <Provider store={store}>
            <PersistGate
           
              persistor={persistor}>
              <Routes />
            </PersistGate>
          </Provider>
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
     );
 };
  // define your styles
//make this component available to the app
 const styles = StyleSheet.create({
       container: {
           flex:1,
      
    }
  });
  
 export default App;
 

 