//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import ResetBG from './ResetBG';
import {useState} from 'react';

// create a component
const Reset = ({navigation}) => {
  const [fruit, setFruit] = useState([
    {name: 'Apple0', key: '1'},
    {name: 'Apple1', key: '2'},
    {name: 'Apple2', key: '3'},
    {name: 'Apple3', key: '4'},
    {name: 'Apple4', key: '5'},
    {name: 'Apple5', key: '6'},
    {name: 'Apple6', key: '7'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <ResetBG />

        <View>
          <Text
            style={styles.Reset}
            onPress={() => navigation.navigate('Signup')}>
            Reset
          </Text>
          <Text style={styles.Password}>
            Password - Testing List in the FlatList
          </Text>
        </View>

        <FlatList
          style={{flex: 1}}
          data={fruit}
          renderItem={({item}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: '#000',
                  marginTop: 20,
                  padding: 10,
                }}>
                {item.name}
              </Text>
            </View>
          )}
        />
        {/* {fruit.map(item => {
          return (
            <View
              key={item.key}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: '#000',
                  marginTop: 20,
                  padding: 10,
                }}>
                {item.name}
              </Text>
            </View>
          );
        })} */}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#eaede1',
  },
  Reset: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  Password: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

//make this component available to the app
export default Reset;
