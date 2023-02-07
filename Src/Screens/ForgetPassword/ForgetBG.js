//import liraries
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

// create a component
const ForgetBG = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Forget.png')}
        imageStyle={{borderRadius: 20}}
        style={styles.BGImg}>
        {children}
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 2,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  BGImg: {
    width: 230,
    height: 200,
    marginTop: 15,
  },
});

//make this component available to the app
export default ForgetBG;
