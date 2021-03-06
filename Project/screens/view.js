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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const view = (props) => {
  
  const [show, setShow] = React.useState(false);
  // const [showEmailError, setShowEmailError] = React.useState(false);
  
  const [email, setEmail] = React.useState(email);
  const handleClick = () => setShow(!show);

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
            
                style={styles.PasswordInput}
                placeholder="Password"
                onChangeText={(val) => setPwd(val)}
            
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

export default view;
