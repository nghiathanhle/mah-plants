import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    if(!phoneNumber || !password) {
      alert("Please fill in all fields");
    } else {
      // Here you'd typically sign up the user and navigate to the HomePage.
      navigation.navigate('HomePage');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={{uri: 'https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/450E9326-0272-405C-B8D614C72BED9F89/52F2110A-1CAA-43C0-BE84F352D8AB0835/WebsiteJpg_XL-FPLS_Main%20Visual_Green_Website.jpg'}} style={styles.container}>
        <Text style={styles.title}>SignUp to Mah-Plants</Text>
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
        <TouchableOpacity style={styles.buttonSignUp} onPress={signUp}>
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
