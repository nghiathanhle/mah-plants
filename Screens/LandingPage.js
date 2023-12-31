import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LandingPage() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    if(!phoneNumber || !password) {
      alert("Please fill in all fields");
    } else {
      // Here you'd typically validate the user's input and navigate to the HomePage if it's correct.
      navigation.navigate('HomePage');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/best-annual-flowers-and-plants-1655932435.jpeg'}} style={styles.container}>
        <Text style={styles.title}>This is Mah-Plants</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonSignIn} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'rgba(255,255,255,0.8)' // You may need to adjust this to make the text inputs visible against the background image
  },
  buttonSignIn: {
    backgroundColor: '#64DD17',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonSignUp: {
    backgroundColor: '#0D47A1',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
