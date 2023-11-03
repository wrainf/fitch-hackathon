import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  Button,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';


function NavBarIcon({title, sourceIcon, currentScreen}) {

    return (
      <View style={styles.sectionContainer}>
            <Image source={sourceIcon} style={styles.image} />
            {currentScreen == title ?  <Text style={styles.focusedText}>{title}</Text> : 
            <Text style={styles.unfocusedText}>{title}</Text>}
      </View>
    );
  }

  const styles = StyleSheet.create({
    sectionContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70%',
    },
    image: {
    },
    focusedText: {
        color: '#E82251',
    },
    unfocusedText: {
        color: '#666666',


    }
  });

export default NavBarIcon;