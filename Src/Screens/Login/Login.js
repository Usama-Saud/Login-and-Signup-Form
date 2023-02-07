//import liraries

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginBG from './LoginBG';
import Google from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';
import Eye from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [visible, setvisible] = useState(true);
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  console.log('Email is:', userName, 'Password is:', password);

  const handleSubmit = () => {
    navigation.navigate('Forget', {
      email: userName,
      pass: password,
      // merge: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <LoginBG />

        <Text
          onPress={() => navigation.navigate('Forget')}
          style={styles.Login}>
          Login
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
            placeholder="Email ID"
            keyboardType="email-address"
            value={userName}
            onChangeText={actualData => setuserName(actualData)}
            // placeholderTextColor="#4070cf"
          />
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Icon
            name="lock"
            size={20}
            color={'#34518c'}
            style={{top: 5, left: 25}}
          />
          <TextInput
            style={styles.Password}
            placeholderTextColor={'#34518c'}
            placeholder="Enter Password"
            keyboardType="default"
            secureTextEntry={visible}
            value={password}
            onChangeText={actualData => setpassword(actualData)}
            // placeholderTextColor="#4070cf"
          />
          <TouchableOpacity
            onPress={() => {
              setvisible(!visible);
              setpasswordVisible(!passwordVisible);
            }}>
            <Eye
              name={passwordVisible === false ? 'eye' : 'eye-slash'}
              size={20}
              color={'#34518c'}
              style={{top: 5, left: 25}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Forget}
            onPress={() => navigation.navigate('DrawerTab')}>
            <Text style={styles.ForgetPass}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={{
              backgroundColor: '#115cf2',
              borderRadius: 100,
              // alignItems: 'center',
              // width: width,
              marginTop: 40,
              backgroundColor: '#115cf2',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 30,
              width: 300,
              height: 50,
              borderRadius: 15,
            }}>
            <Text
              onPress={() => navigation.navigate('Forget')}
              style={{
                color: '#fff',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            // borderRightWidth: 2,
          }}>
          <Text
            style={{
              borderBottomWidth: 1,
              borderColor: 'grey',
              width: 130,
              left: -85,
              top: 12,
              //   opacity: 0.8,
              //   top: -5,
            }}></Text>
          <Text style={{fontSize: 15}}>OR</Text>
          <Text
            style={{
              borderBottomWidth: 1,
              borderColor: 'grey',
              width: 130,
              left: 85,
              top: -28,
              //   opacity: 0.8,
              //   top: -5,
            }}></Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            // onPress={() => alert('Logged In')}
            style={{
              backgroundColor: '#73aabd',
              borderRadius: 100,
              // alignItems: 'center',
              // width: width,
              marginTop: 40,

              alignItems: 'center',
              justifyContent: 'center',
              top: -40,
              width: 300,
              height: 50,
              borderRadius: 15,
            }}>
            <Google
              name="google"
              size={22}
              color={'#fff'}
              style={{
                top: 15,
                left: -120,
                backgroundColor: '#e43',
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                // textAlign: 'center',
                // justifyContent: 'center',
                top: -10,
              }}>
              Login with Google
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: -20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#5c6373'}}>
              New to Logistics?
            </Text>
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 5,
                color: '#0556f7',
              }}>
              Register
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  Login: {
    fontSize: 30,
    left: 10,
    color: '#000',
    fontWeight: 'bold',
    margin: 15,
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
  Password: {
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
  Forget: {
    alignItems: 'flex-end',
    width: '78%',
    // marginBottom: 250,
  },
  //This is forget password
  ForgetPass: {
    color: '#0556f7',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: -50,
    marginTop: 30,
  },
});

//make this component available to the app
export default Login;
