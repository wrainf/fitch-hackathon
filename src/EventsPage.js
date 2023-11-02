import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const dummyData = [
  { 
    "name":"2023 Christmas Fundraising Event",
    "datetime": "2023-12-16T18:00:00Z",
    "locationPlusCode": "GRG8+6F London",
    "tickets": [ 
                 { "type": 1,
                   "price": 5.0,
                   "currency": "GBP" 
                 }, 
                 { "type": 2,
                   "price": 10.0,
                   "currency": "GBP"
                 }
               ]
  },
  { 
    "name":"2023 Christmas Fundraising Event",
    "datetime": "2023-12-16T18:00:00Z",
    "locationPlusCode": "GRG8+6F London",
    "tickets": [ 
                 { "type": 1,
                   "price": 5.0,
                   "currency": "GBP" 
                 }, 
                 { "type": 2,
                   "price": 10.0,
                   "currency": "GBP"
                 }
               ]
  },
  { 
    "name":"2023 Christmas Fundraising Event",
    "datetime": "2023-12-16T18:00:00Z",
    "locationPlusCode": "GRG8+6F London",
    "tickets": [ 
                 { "type": 1,
                   "price": 5.0,
                   "currency": "GBP" 
                 }, 
                 { "type": 2,
                   "price": 10.0,
                   "currency": "GBP"
                 }
               ]
  }
]

function formatEventDateTime(datetime) {
  const eventDate = new Date(datetime);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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


const EventPage = () => {
  var events = []
  for (let i = 0; i < dummyData.length; i++) {
    const formattedDateTime = formatEventDateTime(dummyData[i].datetime);
    events.push(
      <View style={styles.eventBox} key={i}>
        <View style={styles.upperSection}>
          <Image
            source={require('../assets/backgroundImage.png')}
            style={styles.backgroundImage}
          />
          <Text style={styles.eventTitle}>{dummyData[i].name}</Text>
        </View>
        <View style={styles.lowerSection}>
          <View style={styles.leftInfo}>
            <Text style={styles.dateText}>{formattedDateTime.date}</Text>
            <Text style={styles.timeText}>{formattedDateTime.time}</Text>
          </View>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => {
              // Add navigation logic to the 'book ticket' page here
            }}
          >
            <Text style={styles.buttonText}>More Details {">"} </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>All Events</Text>
        {events}
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
});

export default EventPage;
