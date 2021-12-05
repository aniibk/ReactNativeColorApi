import React from 'react';
//import { StyleSheet, View } from 'react-native';
import  ColorScreen  from './screens/ColorScreen';
import  HomeScreen  from './screens/HomeScreen';
import PatternScreen from './screens/PatternScreen';
import PaletteScreen from './screens/PaletteScreen';
import  LoginScreen  from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name= "Login" component={LoginScreen}/> 
          <Drawer.Screen name= "Home" component={HomeScreen}/> 
          <Drawer.Screen name= "Colors" component={ColorScreen}/>
          <Drawer.Screen name= "Patterns" component={PatternScreen}/>
          <Drawer.Screen name= "Palettes" component={PaletteScreen}/>
        </Drawer.Navigator>
     </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    marginVertical: 40,

  },
});
 */