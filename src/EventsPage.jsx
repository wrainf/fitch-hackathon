import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PageTitle from './components/PageTitle';
import events from '../assets/events';
import cancel from '../assets/close.png';
import PaymentModal from './components/payments';
import GlobalButton from './components/Button';
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function formatEventDateTime(datetime) {
  const eventDate = new Date(datetime);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayOfWeek = daysOfWeek[eventDate.getDay()];
  const day = eventDate.getDate();
  const month = months[eventDate.getMonth()];
  const year = eventDate.getFullYear();

  // Format the time (6pm)
  const hours = eventDate.getHours();
  const minutes = eventDate.getMinutes();
  const timePeriod = hours >= 12 ? 'pm' : 'am';

  const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${timePeriod}`;

  return {
    date: `${dayOfWeek}, ${day} ${month} ${year}`,
    time: formattedTime,
  };
}

function EventDetails({event, closeFunction}) {
  const date = new Date(event.datetime)
  const [isBuying, setIsBuying] = useState(false)

  function buyTickets() {
    setIsBuying(true)
  }

  function cancelTickets() {
      setIsBuying(false)
  }

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
            <Text style={styles.sectionDescription}>{`${daysOfWeek[date.getDay()]} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Text>
            <Text style={styles.sectionDescription}>{event.locationPlusCode}</Text>
            <View style={{marginTop: 10}}>
             <GlobalButton title="Buy tickets" onPress={buyTickets} />
            </View>
            {isBuying && <PaymentModal cancelTicket={cancelTickets} event={event}/>}
          </View>
    </>
  )
}

const EventCard = ({index}) => {
  const formattedDateTime = formatEventDateTime(events[index].datetime);
  const [showDetails, setShowDetails] = useState(false);

  return(<View style={styles.eventBox} key={index}>
    <View style={styles.upperSection}>
      <Image
        source={require('../assets/backgroundImage.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.eventTitle}>{events[index].name}</Text>
    </View>
    <View style={styles.lowerSection}>
      <View style={styles.leftInfo}>
        <Text style={styles.dateText}>{formattedDateTime.date}</Text>
        <Text style={styles.timeText}>{formattedDateTime.time}</Text>
      </View>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => {
          setShowDetails(true)
        }}
      >
        <Text style={styles.buttonText}>More Details {">"} </Text>
      </TouchableOpacity>
    </View>
    {showDetails && (<EventDetails event={events[index]} closeFunction={() => setShowDetails(false)}/>)}
  </View>)
}


const EventPage = () => {
  var eventElements = []
  for (let i = 0; i < events.length; i++) {
    eventElements.push(
      <EventCard index={i}/>
    )
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <PageTitle title='All Events' />
        {eventElements}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
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
  eventBox: {
    width: '90%',
    aspectRatio: 1.2, // You can adjust this to fit your layout
    borderRadius: 20,
    backgroundColor: '#181716',
    marginTop: 20,
  },
  upperSection: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 20,
  },
  eventTitle: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  lowerSection: {
    flex: 0.35,
    flexDirection: 'row',
  },
  leftInfo: {
    flex: 0.7,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E82251',
  },
  timeText: {
    fontSize: 16,
    color: '#E82251',
  },
  detailsButton: {
    flex: 0.3,
    backgroundColor: '#181716', // Change the color as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionContainer: {
    backgroundColor: '#090909',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    padding: 10

   },
   subsectionContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#090909',
    padding: 10
   },
   sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#666666'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F5F5F7',
  },
  overlay:{
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 20,
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});

export default EventPage;
