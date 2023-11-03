
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';

import Tickets from './src/Tickets.jsx';
import Home from './src/Home';
import EventPage from './src/EventsPage.jsx';
import NavBarIcon from './src/components/NavBarIcon.jsx';

import homeFocused from './assets/homeFocused.png'
import home from './assets/home.png'

import eventsFocused from './assets/eventsFocused.png'
import events from './assets/events.png'

import ticketsFocused from './assets/ticketsFocused.png'
import tickets from './assets/tickets.png'

import profileFocused from './assets/profileFocused.png'
import profile from './assets/profile.png'
import ProfilePage from './src/ProfilePage.jsx';
import { BackgroundColor } from './GlobalStyles.js';


const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    if (currentScreen === 'Home') {
      return <Home />;
    } else if (currentScreen === 'Events') {
      return <EventPage />;
    } else if (currentScreen === 'Tickets') {
      return <Tickets />;
    } else if (currentScreen === 'Profile') {
      return <ProfilePage />;
    }
  };

  return (
    
      <View style={styles.container}>
        {renderScreen()}

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.tab}>
            <NavBarIcon title={'Home'} currentScreen={currentScreen} sourceIcon={currentScreen == 'Home' ? homeFocused:home}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentScreen('Events')} style={styles.tab}>
            <NavBarIcon title={'Events'} currentScreen={currentScreen} sourceIcon={currentScreen == 'Events' ? eventsFocused:events}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentScreen('Tickets')} style={styles.tab}>
            <NavBarIcon title={'Tickets'} currentScreen={currentScreen} sourceIcon={currentScreen == 'Tickets' ? ticketsFocused:tickets}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentScreen('Profile')} style={styles.tab}>
            <NavBarIcon title={'Profile'} currentScreen={currentScreen} sourceIcon={currentScreen == 'Profile' ? profileFocused:profile}/>
          </TouchableOpacity>
        </View>
      </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: BackgroundColor,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 70,
    position: 'fixed',


  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
