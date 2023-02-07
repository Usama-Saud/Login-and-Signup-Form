//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

// create a component
const ResetBG = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Reset.png')}
        imageStyle={{borderRadius: 10}}
        style={styles.IMGBg}>
        {children}
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  IMGBg: {
    height: 200,
    width: 250,
    marginTop: 20,
  },
});

//make this component available to the app
export default ResetBG;
