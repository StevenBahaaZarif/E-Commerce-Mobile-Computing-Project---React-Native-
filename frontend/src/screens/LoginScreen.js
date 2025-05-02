import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyle,
} from '../../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import LottieView from "lottie-react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = false;

  const submitHandler = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Login Successful!',
      text2: 'You have successfully logged in.',
      visibilityTime: 3000, // Duration for the toast to be visible
      autoHide: true, // Automatically hide after visibilityTime
    });    
    navigation.navigate('Main');
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Login</Text>
        </View>
        <ScrollView
                  showsVerticalScrollIndicator={false}

                >

        <View style={styles.container}>
          <View style={styles.lottieWrapper}>
            <LottieView
              source={require("../assets/Cart.json")} // Replace with your animation file
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>

          <TextInput
            {...inputOptions}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            
            keyboardType='email-address'
          />
          <TextInput
            {...inputOptions}
            placeholder='Password'
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => navigation.navigate('forgetpassword')}
          >
            <Text style={styles.forget}>Forget Password</Text>
          </TouchableOpacity>

          <Button
            style={styles.btn}
            textColor={colors.color7}
            disabled={email === '' || password === ''}
            onPress={submitHandler}
            loading={loading}
          >
            Log In
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Make background semi-transparent
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 0,
  },
  forget: {
    color: colors.color7,
    marginHorizontal: 20,
    marginBottom: 10,
    alignSelf: 'flex-end',
    fontWeight: '100',
  },
  btn: {
    backgroundColor: colors.color1,
    fontWeight: 'bold',
    margin: 20,
    padding: 5,
  },
  or: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '100',
    color: colors.color7,
  },
  link: {
    color: colors.color1,
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
    textTransform: 'uppercase',
    borderColor: 'rgb(0,0,0)',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 14,
  },
  lottieWrapper: {
    top: 50, // Adjust this value to position it correctly
    left: '50%',
    transform: [{ translateX: -150 }], // Centers the Lottie animation horizontally
  },
  lottie: {
    width: 300,
    height: 300,
    marginTop:-100,
    marginBottom:50,
    },
});

export default Login;