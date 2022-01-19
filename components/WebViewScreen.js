import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler, StyleSheet } from 'react-native';

export default function WebViewScreen(props) {
    const INJECTED_CODE = `
    (function() {
    function wrap(fn) {
        return function wrapper() {
        var res = fn.apply(this, arguments);
        window.ReactNativeWebView.postMessage('navigationStateChange');
        return res;
        }
    }

    history.pushState = wrap(history.pushState);
    history.replaceState = wrap(history.replaceState);
    window.addEventListener('popstate', function() {
        window.ReactNativeWebView.postMessage('navigationStateChange');
    });
    })();

    true;
    `;

    const ref = useRef();
    const [ navState, setNavState ] = useState();

    useEffect(() => {
        const onPress = () => {
            if(navState,canGoBack) {
                ref.current.goBack();
            } else {
                
            }
        }
        BackHandler.addEventListener('hardwareBackPress', onPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onPress);
        }
    }, [navState,canGoBack])

    return (
        <WebView
            ref={ref}
            onLoadStart={() => ref.current.injectJavaScript(INJECTED_CODE)}
            onNavigationStateChange={setNavState}
            onMessage={({nativeEvent}) => setNavState(nativeEvent)}
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