import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Button 
            title='Go to Details'
            onPress={() => navigation.navigate('Details')}
        />
        <Button 
            title='Go to WebView'
            onPress={() => navigation.navigate('WebView')}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

  
export default HomeScreen;