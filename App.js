import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [colors, setColors] = useState([]);

  const renderItem = ({ item }) => (
    <View style={{ height: 50, width: '100%', backgroundColor: item }} />
  );

  return (
    <View>
      <Text style={styles.header}>React Native Random Color Generator</Text>
      <Button
        title="Add new color"
        onPress={()=> setColors([...colors, createNewColor()])}
      />
      <Button
        title="Clear colors"
        onPress={()=> setColors([])}
      />
      <FlatList
        data={ colors }
        keyExtractor={item => item}
        renderItem={renderItem}
      />
    </View>
  );
}

const generateShade = ()=> {
  return Math.floor( Math.random() * 256 );
}

const createNewColor = ()=> {
  const red = generateShade();
  const green = generateShade();
  const blue = generateShade();
  return `rgb( ${red}, ${green}, ${blue} )`;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 33,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
