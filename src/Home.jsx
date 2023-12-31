import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import placeholder from '../assets/placeholder.jpg';
import arrowLeft from '../assets/arrowLeft.png';
import arrowRight from '../assets/arrowRight.png';
import events from '../assets/events';
import EventDetails from './components/EventDetails';
import GlobalButton from './components/Button';
import PageTitle from './components/PageTitle';



function HomeEvent({ title, currentIndex, changeToDetails, changeToSummary, showEventDetails }) {

  return (
    <ImageBackground source={placeholder} style={styles.image}>
      <PageTitle title='Upcoming Events' viewStyle={{backgroundColor: 'rgba(0,0,0,0.7)'}}/>
      {showEventDetails ? (
        <EventDetails index={currentIndex} closeFunction={changeToSummary}/>
      ) : (
          <View style={styles.sectionContainer} >
            
            <Text style={styles.sectionTitle}>{title.name} </Text>
            <GlobalButton small title="Learn more" style={styles.sectionButton} onPress={changeToDetails} />
          </View>
        
      )}
      </ImageBackground>
  );
}

function Home() {
  const height = Dimensions.get('window').height;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEventDetails, setShowEventDetails] = useState(false);

  const changeToDetails = () => {
    setShowEventDetails(true);

  }

  const changeToSummary = () => {
    setShowEventDetails(false);

  }



  const goToPreviousEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const goToNextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  return (
    <View style={{ flex: 1 }}>
        <HomeEvent title={events[currentIndex]} showEventDetails={showEventDetails} currentIndex={currentIndex} changeToDetails={changeToDetails} changeToSummary={changeToSummary}/>
        {!showEventDetails && ( <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, position: 'absolute', top: '50%', width: '100%' }}>
          <TouchableOpacity onPress={goToPreviousEvent}>
            <Image source={arrowLeft}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNextEvent}>
            <Image source={arrowRight} />
          </TouchableOpacity>
        </View>)}
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '600',
    color: '#f5f5f7',
    maxWidth: '65%',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionButton: {
    padding: 20,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
});

export default Home;
