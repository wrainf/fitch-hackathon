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

import events from '../../assets/events';

import cancel from '../../assets/close.png'

function EventDetails({index, closeFunction}) {
    const height = Dimensions.get('window').height;
    const event = events[index];
    const date = new Date(event.datetime)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    return (
      <View style={styles.sectionContainer}>
          
          <TouchableOpacity onPress={closeFunction} style={styles.imageWrapper}>
             <Image source={cancel} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.overlay}>
            <Text style={styles.sectionTitle}>{event.name}</Text>
            <Text style={styles.sectionDescription}>{event.description}</Text>
            <Text style={styles.sectionDescription}>{`${days[date.getDay()]} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Text>
            <Text style={styles.sectionDescription}>{event.locationPlusCode}</Text>
            <Button title="Buy tickets" />
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
      overlay:{
          backgroundColor: '#090909',
          position: 'absolute',
          height: '70%',
          width: '100%',
          bottom: 0,
          zIndex: 1,
          padding: 10,
      },
    sectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 60,
      backgroundColor: 'rgba(0,0,0,0.7)',
      zIndex: 1,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#f5f5f7',
      textAlign: 'left',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 20,
      color: '#666666'
    },
    highlight: {
      fontWeight: '700',
    },
    sectionButton: {
      padding: 20,
    },
    image: {
      height: 36,
      width: 36,
    },
    imageWrapper: {
        position: 'absolute',
        height: 36,
        width: 36,
        top: 20,
        right: 20,
      }
  });

export default EventDetails;