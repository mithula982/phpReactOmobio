/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  Image
} from 'react-native';
import {Input, NativeBaseProvider} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import colorConstant from './constants/colorConstant';
import {Button} from 'react-native-paper';
import view from './screens/view';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="view" component={view} />
     
    </Stack.Navigator>
  );
}



const Login = () => {
 
   
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  // const [showEmailError, setShowEmailError] = React.useState(false);
  const [pwd, setPwd] = React.useState();
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  const handleClick = () => setShow(!show);

  const login =  () => {
  fetch('http://10.0.2.2:80/Test_api/kkk.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: email, 
    password: pwd
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            navigation.replace('MyStack');
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
  };

 

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.Container}>
        <StatusBar backgroundColor={colorConstant.primaryColor} />

        <View style={styles.HeaderContainer}>
        <Image source={require('./image.png')}
          style={{
            width: 350,
            height: 350,
            left: 10,
            alignItems: "center"
          }} />
        </View>
        <View style={styles.BottomContainer}>
          <Text style={styles.HeaderTxt}>Login</Text>
          <View>
            <View style={styles.InputUsername}>
              <Input
                style={styles.UsernameInput}
                placeholder="Username"
                onChangeText={(val) => setEmail(val)}
                // onBlur={() => validateEmail()}
                value={email}
              />
              {/* {showEmailError ? <Text>Enter valid Email</Text> : null} */}
            </View>
            <View>
              <Input
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Button
                    style={{
                      backgroundColor: colorConstant.primaryColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 59,
                    }}
                    roundedRight="md"
                    roundedLeft={0}
                    onPress={handleClick}>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 13,
                      }}>
                      {show ? 'Hide' : 'Show'}
                    </Text>
                  </Button>
                }
                style={styles.PasswordInput}
                placeholder="Password"
                onChangeText={(val) => setPwd(val)}
              />
            </View>
          </View>
          <View style={styles.ForgotPwdContainer}>
            <Button
              mode="text"
              uppercase={false}
              onPress={() => navigation.navigate('forgotPassword')}>
              <Text style={styles.ForgotPwdText}>ForgotPassword</Text>
            </Button>
            <View style={styles.SigninBtnContainer}>
              <Button
                color={colorConstant.primaryColor}
                style={{
                  flexDirection: 'column',
                  height: 50,
                  width: 100,
                  marginTop: 5,
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colorConstant.primaryColor,
                }}
                mode="contained"
                onPress={() => login()}>
                <Text style={styles.SigninBtn}> Login </Text>
              </Button>
            </View>
          </View>
          <View style={styles.DontHaveAccContainer}>
            <View style={styles.SignupContainer}>
              <Text style={styles.DontHaveAccTxt}>Don't have an Account</Text>
              <Button
                color={colorConstant.primaryColor}
                style={{
                  flexDirection: 'column',
                  height: 30,
                  width: 100,
                  marginTop: 5,
                  justifyContent: 'center',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: colorConstant.primaryColor,
                }}
                mode="outlined"
                onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.SignupBtn}> Sign up </Text>
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colorConstant.primaryColor,
  },
  HeaderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 2,
  },
  Heading: {
    fontFamily: 'Barlow-Bold',
    fontSize: 48,
    color: '#FFFFFF',
  },
  BottomContainer: {
    flex: 2.5,
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    padding: 10,
  },
  InputUsername: {
    marginTop: 4,
    marginBottom: 20,
  },
  HeaderTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    color: colorConstant.primaryColor,
    left: 5,
  },
  UsernameInput: {
    height: 59,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    borderWidth: 1,
    borderColor: colorConstant.primaryColor,
    // paddingLeft: 20,
  },
  PasswordInput: {
    height: 59,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderColor: colorConstant.primaryColor,
  },
  ForgotPwdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    // marginBottom: 5,
  },
  ForgotPwdText: {
    fontFamily: 'Poppins-Medium',
    color: colorConstant.primaryColor,
    fontSize: 14,
  },
  DontHaveAccContainer: {
    // flex: 1,
    marginTop: 50,
    // flexDirection: 'row',
    // justifyContent: 'space-between',

    // paddingBottom: 20,
  },
  SignupContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  DontHaveAccTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: colorConstant.proCharcoal,
    justifyContent: 'center',
  },
  SignupBtn: {
    fontSize: 12,
  },
  SigninBtnContainer: {},
  SigninBtn: {
    flexDirection: 'row',
    fontSize: 14,
  },
});

export default Login;
