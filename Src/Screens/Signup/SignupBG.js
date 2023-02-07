//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

// create a component
const SignupBG = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Signup.png')}
        imageStyle={{borderRadius: 10}}
        style={styles.bgIMG}>
        {children}
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',

    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  bgIMG: {
    marginTop: 25,
    height: 200,
    width: 250,
  },
});

//make this component available to the app
export default SignupBG;
