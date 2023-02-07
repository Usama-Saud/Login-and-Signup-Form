//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import SignupBG from './SignupBG';
import Icon from 'react-native-vector-icons/Entypo';
import {useState} from 'react';

import CheckBox from 'react-native-check-box';
const win = Dimensions.get('window');

// create a component

const Signup = ({navigation}) => {
  const [isChecked, setisChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <SignupBG />

        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.Signup}>
          Sign up
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="email"
            size={20}
            color={'#34518c'}
            style={{top: 10, left: 25}}
          />
          <TextInput
            style={styles.Email}
            placeholderTextColor={'#34518c'}
            placeholder="Enter your Email"
            keyboardType="email-address"
            // placeholderTextColor="#4070cf"
          />
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Icon
            name="user"
            size={20}
            color={'#34518c'}
            style={{top: 5, left: 25}}
          />
          <TextInput
            style={styles.Name}
            placeholderTextColor={'#34518c'}
            placeholder="Enter Full Name"
            keyboardType="default"
            // placeholderTextColor="#4070cf"
          />
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Icon
            name="mobile"
            size={20}
            color={'#34518c'}
            style={{top: 5, left: 25}}
          />
          <TextInput
            style={styles.Mobile}
            placeholderTextColor={'#34518c'}
            placeholder="Mobile"
            keyboardType="phone-pad"
            // placeholderTextColor="#4070cf"
          />
        </View>
        <CheckBox
          style={{left: 15, top: 15}}
          isChecked={isChecked}
          rightText="Accept All"
          rightTextStyle={{
            fontSize: 18,
            fontWeight: '500',
            color: isChecked ? 'black' : 'red',
          }}
          onClick={() => setisChecked(!isChecked)}
          checkedCheckBoxColor="green"
          unCheckedCheckBoxColor="#34f"
        />
        <View style={styles.Text1}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#5c6373',
              // textAlign: 'center',
              marginLeft: 18,
              // flex: 1,
              flexWrap: 'wrap',
            }}>
            By Signing up, you are agree to our
          </Text>

          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#0556f7',
              left: 5,
              // flex: 1,
              flexWrap: 'wrap',
              // marginRight: -20,
              // textAlign: 'center',
              // flexGrow: 1,
              // flexShrink: 1,
            }}>
            Terms & Conditions
          </Text>
        </View>

        <View style={styles.Text2}>
          <Text
            style={{
              fontSize: 13,
              left: -2,
              fontWeight: 'bold',
              color: '#5c6373',
            }}>
            and
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              marginLeft: 3,
              color: '#0556f7',
            }}>
            Privacy Policy
          </Text>
        </View>

        <TouchableOpacity
          style={styles.ParentContinue}
          onPress={() => setisChecked(alert('checked'))}
          // backgroundColor={isChecked ? 'green' : 'red'}
          disabled={!isChecked}>
          <Text style={styles.Continue}>Continue</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#5c6373'}}>
            Joined us Before?
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 5,
              color: '#0556f7',
            }}
            onPress={() => navigation.navigate('DrawerTab')}>
            Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // alignSelf: 'center',
    // alignContent: 'center',

    backgroundColor: '#fff',
  },
  Signup: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
    color: '#000000',
  },
  Email: {
    fontSize: 20,
    left: 40,
    marginTop: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#898c7e',
    color: '#4070cf',
    fontWeight: '500',
    width: '75%',
  },
  Name: {
    fontSize: 20,
    left: 40,
    marginTop: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#898c7e',
    color: '#4070cf',
    fontWeight: '500',
    width: '75%',
  },
  Mobile: {
    fontSize: 20,
    left: 40,
    marginTop: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#898c7e',
    color: '#4070cf',
    fontWeight: '500',
    width: '75%',
  },
  Text1: {
    // paddingRight: 55,
    // paddingLeft: 50,
    // display: 'flex',
    flexDirection: 'row',
    // width: win.width,
    // position: 'relative',
    // flexGrow: 1,
    // flexShrink: 1,
    // width: '80%',
    // flexWrap: 'wrap',
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    // marginLeft: -10,
    marginTop: 30,

    // justifyContent: 'space-between',
  },
  Text2: {
    flexDirection: 'row',
    // width: '80%',
    // textAlign: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  ParentContinue: {
    backgroundColor: '#115cf2',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
    width: 300,
    height: 50,
    borderRadius: 15,
  },
  Continue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Signup;
