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
 } from 'react-native';

 function TicketSection({title, date}) {
  return (
    <View style={styles.sectionContainer}>
      <View style={{backgroundColor: 'red', width: '30%', aspectRatio:'1/1'}}/>
     <View style={{flexDirection: 'column', flex: 1, gap: 16}}>
       <Text style = {{color: '#F5F5F7', fontSize: 24, fontWeight: '700'}}>{title}</Text>
       <View style={styles.subsectionContainer}>
         <Text style={{color:'#E82251', fontWeight:'900', fontSize:12}}>{date}</Text>
         <Text style={{color:'white', fontWeight:'700', fontSize:12 }}>More details</Text>
       </View>
     </View>
     </View>
   );
 }

 function Tickets(){
   return (
    <View style={styles.backgroundStyle}>
     <View>
        <Text style={{fontSize: 24, color: '#E82251', fontWeight: 'bold',backgroundColor:'#1E1E1E'}}>My tickets</Text>

       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={styles.backgroundStyle}>
          <TicketSection title={'2022 Traditional Christmas Party'} date={'Thu 01 Dec 2022'}/>
       </ScrollView>
     </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
   },
   subsectionContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
   },
   sectionTitle: {
     fontSize: 30,
     fontWeight: 'bold',
     color: '#F5F5F7'
   },
  backgroundStyle:{
    backgroundColor: '#1E1E1E',
    height: 1000,
    width: '100%',
    paddingLeft: 7,
    paddingTop: 20,
    paddingRight: 5
  },
 });
 
 export default Tickets;
 