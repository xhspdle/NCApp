import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function WebViewScreen() {
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'http://www.new-church.com/' }}
        />
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