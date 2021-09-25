import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ColorCard from './components/ColorCard';
import AppBar from './components/AppBar';


const urlapi = "http://www.colourlovers.com/api/colors/?format=json"


export default function App() {

  const [colors, setColors] = useState([]);

  const getColors = useCallback(async () => {
    const res = await fetch(urlapi);
    const response = await res.json();
    setColors(response);
  }, []);

  useEffect(() => {
    getColors();
  }, [getColors]);

  return (
    <View style={styles.container}>

      <AppBar/>

      <FlatList
        data={colors}
        keyExtractor={({ apiUrl }, index) => apiUrl}
        renderItem={({ item }) => (
          <ColorCard item={item} />
        )}
      />

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,

  },
});
