import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert, StyleSheet } from 'react-native';

const image = { uri: "https://images.pexels.com/photos/2560900/pexels-photo-2560900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };

export default function LandingPage({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  const validateInput = () => {
    const phoneRegEx = /^[0-9]{10}$/;
    const codeRegEx = /^[0-9]{4}$/;

    if (!phoneRegEx.test(phoneNumber)) {
      Alert.alert("Invalid phone number");
    } else if (!codeRegEx.test(code)) {
      Alert.alert("Invalid code");
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground source={image} style={styles.background}>
      <Text style={styles.title}>This is Mah-Plants</Text>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          keyboardType="numeric"
          placeholder="Phone Number"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCode}
          value={code}
          keyboardType="numeric"
          placeholder="4-digit Code"
        />
        <TouchableOpacity style={styles.button} onPress={validateInput}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={validateInput}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '70%',
    marginTop: '20%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderRadius: 20,
    borderWidth: 0,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
