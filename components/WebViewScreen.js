import React, { useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler, StyleSheet, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function WebViewScreen(props) {
    const webView = useRef(null);
    const [canGoBack, SetCanGoBack] = useState(false);
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if(webView.current && canGoBack) {
                    webView.current.goBack();
                    return true;
                } else {
                    return false;
                }
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => 
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [canGoBack]),
    );

    return (
        <WebView
            ref={webView}
            onNavigationStateChange={(navState) => {
                console.log(navState);
                SetCanGoBack(navState.canGoBack);
            }}
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