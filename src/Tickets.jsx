/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import {
   Image,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity
 } from 'react-native';

 import arrow from '../assets/arrowRight.png'
 import place from '../assets/placeholder.jpg'
 import events from '../assets/events';
 import { useState } from 'react';
 import cancel from '../assets/close.png'
 import shape from '../assets/Shape.png'
import PageTitle from './components/PageTitle';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function TicketDetails({event, closeFunction}) {
  const date = new Date(event.datetime)
  return (
    <>
          <View style={styles.overlay}>
            <View style={{alignItems:'flex-end', width:'100%'}}>

              <TouchableOpacity onPress={closeFunction}>
              <Image source={cancel} style={{}} />
            </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>{event.name}</Text>
            <Text style={styles.sectionDescription}>{event.description}</Text>
            <Text style={styles.sectionDescription}>{`${days[date.getDay()]} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Text>
            <Text style={styles.sectionDescription}>{event.locationPlusCode}</Text>
          </View>
    </>
  )
}



 function TicketSection({event}) {
  const [showEventDetails, setShowEventDetails] = useState(false);
  const title = event.name;
  const dateObj = new Date(event.datetime)

  const date = `${days[dateObj.getDay()]} - ${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
  const changeToDetails = () => {
    setShowEventDetails(true);

  }

  const changeToSummary = () => {
    setShowEventDetails(false);

  }
  return (
    <>
     <View style={styles.sectionContainer}>
      <Image style={{ width: '30%', aspectRatio:'1/1', borderRadius:20}} source={place}/>
     <View style={{flexDirection: 'column', flex: 1, gap: 16}}>
       <Text style = {{color: '#F5F5F7', fontSize: 24, fontWeight: '700'}}>{title}</Text>
       <View style={styles.subsectionContainer}>
         <Text style={{color:'#E82251', fontWeight:'900', fontSize:12}}>{date}</Text>
          <TouchableOpacity onPress={changeToDetails} style={{flexDirection:'row' ,alignItems: 'center'}}>
            <Text style={{color:'white', fontWeight:'700', fontSize:12 }}>More details </Text>
            <Image  style={{height:10, width: 10}} source={arrow}/>
          </TouchableOpacity>
       </View>
     </View>
     </View>
     {showEventDetails && (<TicketDetails closeFunction={changeToSummary} event={event}/>) } 

    </>
    
   );
 }

 function Tickets(){
   return (
     
     <View style={styles.backgroundStyle}>
     <PageTitle title='My Tickets' />
     {events.length > 0 ? 
       <ScrollView
         
         style={styles.eventContainer}>
          {events.map((event, index) => {
            return (<TicketSection key={index+event.name} event={event} />)} )}
       </ScrollView>
     : 
     <View style={{gap:30,alignItems:'center', justifyContent: 'center',height:'100%'}}>
     <Image source={shape}></Image>
     <Text style={{fontSize:36, fontWeight:'900', color:'#E82251'}}>No tickets</Text>
     </View>
     }
     </View>
     

    
   );
 }
 

 

 const styles = StyleSheet.create({
   sectionContainer: {
    backgroundColor: '#090909',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
   },
   subsectionContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#090909',
   },
   sectionTitle: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#F5F5F7',
   },
  backgroundStyle:{
    backgroundColor: '#090909',
    flex: 1,
    padding: 20,
  },
  eventContainer: {
    flexDirection: 'column',
    height: '100%'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#666666'
  },
  overlay:{
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 20,
  }
 });
 
 export default Tickets;
 