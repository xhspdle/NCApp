import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, Linking } from 'react-native';
import { ImageBackground } from 'react-native-web';

const DATA = [
  {
    id: 'fl_01',
    title: '홈페이지',
    navi: 'WEB',
  },
  {
    id: 'fl_02',
    title: 'GWKTV-실시간예배중계',
    navi: 'YOUTUBE',
  },
  {
    id: 'fl_03',
    title: '모바일전도지(준비중)',
    navi: 'KERYGMA',
  },
];

const Item = ({ title, navi, navigation }) => (
  <TouchableOpacity 
    style={styles.item} 
    onPress={() => {
      switch (navi) {
        case 'WEB':
          navigation.navigate(navi);
          break;
        case 'YOUTUBE':
          Linking.openURL('vnd.youtube://channel/UCSic0lS4ndOdP3ysdt05iVA');
          break;
      }
    }}>
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  
  const renderItem = ({ item }) => (
    <Item title={item.title} navi={item.navi} navigation={navigation}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Button 
    //       title='Go to Details'
    //       onPress={() => navigation.navigate('Details')}
    //   />
    //   <Button 
    //       title='Go to WebView'
    //       onPress={() => navigation.navigate('WEB')}
    //   />
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0
    },
    item: {
      backgroundColor: '#e9e9e9',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: '#c1c1c1'
    },
    title: {
      fontSize: 28,
      textAlign: 'center'
    },
    image: {
      flex: 1,
      justifyContent: "center"
    }
});

  
export default HomeScreen;