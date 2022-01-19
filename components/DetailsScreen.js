import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
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

export default DetailsScreen;