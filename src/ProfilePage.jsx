import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button'
import InputField from './components/InputField'
import PageTitle from './components/PageTitle'

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const saveProfile = () => {
    if (validateEmail(email) && validatePhone(phone))
      saveUserEmailAndPhone(email, phone);
  };

  const saveUserEmailAndPhone = (email, phone) => {

  }

  const validateEmail = (email) => {
    // Simple email validation, you can add a more comprehensive check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Simple phone validation, you can add a more comprehensive check
    return /^\d{10}$/.test(phone);
  };

  return (
    <View style={styles.container}>
      <PageTitle title='Profile' styles={{paddingLeft: 30}}/>
      <Text style={styles.personIcon}>👤</Text>
      <View style={styles.inputs}>
      <View style={styles.inputSection}>
        <InputField 
          title='EMAIL ADDRESS' 
          placeholder='NOT SET'
          writeTo={setEmail} 
          checkValid={validateEmail} 
          text={email} 
          invalidText='Please enter a valid email address' 
          box={false} />
      </View>
      <View style={styles.inputSection}>
        <InputField 
          title='PHONE NUMBER' 
          placeholder='NOT SET'
          writeTo={setPhone} 
          checkValid={validatePhone} 
          text={phone} 
          invalidText='Please enter a valid phone number' 
          box={false} />
      </View>
      </View>
      <Button title='Save' small={true} onPress={saveProfile} disabled={false} hollow={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputs:{
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 50,
    color: '#E82251',
  },
  personIcon: {
    paddingTop: '40%',
    fontSize: 100,
    // Insert styles for the person icon here
  },

 
  inputSection: {
    width: '80%',
    marginTop: '6%',
    marginBottom: '%',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E82251',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  saveButton: {
    marginTop: '15%',
    backgroundColor: '#E82251',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfilePage;
