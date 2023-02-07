//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ForgetBG from './ForgetBG';
import Icon from 'react-native-vector-icons/Entypo';
import {useRoute, useNavigation} from '@react-navigation/native';

// create a component
const Forget = ({navigation}) => {
  // console.log(route.params);
  //Destructuring, Getting parameters

  // useEffect(
  //   () => {
  // const {Email, Pass} = n;
  const route = useRoute();
  // const {Email, Pass} = route.params;
  // if (route.params?.Email && route.params?.Pass) {
  //   // return Email && Pass;
  // }

  // },
  // [route.params?.Email],
  // [route.params?.Pass],
  // );

  // const {Email, Pass} = this.props.route.params;

  // if (Email && Pass == '') {
  //   alert('Enter som');
  // }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ForgetBG />
        <View>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('Forget')}
              style={styles.Forget}>
              Forget
            </Text>
            <Text style={styles.Password}>Password?</Text>
          </TouchableOpacity>
          {/* <View style={{left: 20}}> */}
          <Text style={styles.SimpleText}>
            Don't Worry! It Happens. Please Enter the Address Associated with
            Your Account
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="email"
              size={20}
              color={'#34518c'}
              style={{top: 10, left: 25}}
            />
            <TextInput
              placeholder="Email ID / Mobile number"
              keyboardType="numbers-and-punctuation"
              style={styles.email}
              placeholderTextColor={'#34518c'}
            />
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Reset')}
              style={styles.btn}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#43d'}}>
              user:
              {/* {Email} */}
              {route.params?.email}
            </Text>
            <Text style={{fontSize: 20, color: '#43d'}}>
              pass:
              {/* {Pass} */}
              {route.params?.pass}
            </Text>
          </View>
          {/* </View> */}
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
  Forget: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  Password: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  SimpleText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    marginTop: 25,
    color: 'grey',
    left: 20,
    width: 350,
    // left: -57,
    // marginRight: 15,
  },
  email: {
    borderBottomWidth: 2,
    fontSize: 20,
    left: 40,
    marginTop: 35,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#898c7e',
    color: '#4070cf',
    fontWeight: '500',
    width: '75%',
  },
  btn: {
    backgroundColor: '#115cf2',
    borderRadius: 100,
    // alignItems: 'center',
    // width: width,
    marginTop: 40,
    backgroundColor: '#115cf2',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    width: 300,
    height: 50,
    borderRadius: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

//make this component available to the app
export default Forget;
