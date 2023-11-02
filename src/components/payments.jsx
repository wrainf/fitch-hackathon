import React, { useState } from "react";
import { Button, Pressable, Text, View, TextInput, StyleSheet } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const eventTitle = "2022 Traditional Christmas Party";
  const ticketPrice = "£65.00";
  const subTotalPrice = "£135.00"

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, borderColor:'red'}}>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal isVisible={isModalVisible} style={{marginLeft: 0, marginRight: 0}}>
        <View style={{ flex: 1, flexDirection: 'column'}}>
          <Text style={{height: '6%', fontSize: 25, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: "#E82251"}}>Payment</Text>
          <View style={{flex:1, alignSelf:'stretch', backgroundColor: 'black', display: 'flex', flexDirection: 'column'}}>
            <View style={{height: 'auto'}}>
              <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'grey'}}>Event</Text>
              <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white'}}>{eventTitle}</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'grey'}}>Order Details</Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white'}}>1 x Adult</Text>
                <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white', textAlign: 'right', paddingRight: 5}}>{ticketPrice}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white'}}>1 x Adult</Text>
                <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white', textAlign: 'right', paddingRight: 5}}>{ticketPrice}</Text>
              </View>
              <View style={{marginTop: 20, display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white'}}>Subtotal</Text>
                <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white', textAlign: 'right', paddingRight: 5}}>{subTotalPrice}</Text>
              </View>
            </View>
            {/* Personal details input */}
            <View style={{marginTop: 40, display: 'flex', flexDirection: 'column'}}>
              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRESS*</Text>
                <TextInput style={[styles.input]} value="Hello"/>
              </View>
              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRESS*</Text>
                <TextInput style={[styles.input]} value="Hello"/>
              </View>
            </View>
            {/* PurchaseButton */}
            <View style={{marginTop: 30}}>
              <Pressable style={styles.TEMPORARYbutton}>
                <Text style={styles.TEMPORARYbuttontext}>{`Buy now - ${subTotalPrice}`}</Text>
              </Pressable>
            </View>
          </View>
          {/* <Button title="Payment" onPress={toggleModal} /> */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // textBold: {
  // },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'white',
    fontWeight: '600',
    color: 'white',
  },
  inputTitle: {
    fontSize: 12,
    fontWeight: '800', 
    marginTop: 10, 
    paddingLeft: 10, 
    color: '#E82251'
  },
  testBorder: {
    borderColor:'red',
    borderBottomWidth:1,
    borderTopWidth:1
  },
  TEMPORARYbutton: {
    backgroundColor: '#E82251',
    fontWeight: '800',
    color: 'white',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  TEMPORARYbuttontext: {
    fontWeight: '800',
    color: 'white',
    fontSize: 17
  }
});

export default ModalTester;

// borderColor:'red',borderBottomWidth:1,borderTopWidth:1,