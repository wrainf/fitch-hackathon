import React, { useState } from "react";
import { Button, Pressable, Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import GlobalButton from './Button';
import InputField from "./InputField";
import PaymentSuccess from "./paymentSucess";


function TicketOrder({price, type, subtotal, setSubtotal}) {
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)


  function addAmount() {
    const nextAmount = amount + 1
    const nextTotal = price * nextAmount
    setAmount(nextAmount)
    setTotal(nextTotal)
    setSubtotal(subtotal + price)
  }

  function reduceAmount() {
    const nextAmount = amount - 1
    if(nextAmount >= 0) {
      const nextTotal = price * nextAmount
      setAmount(nextAmount)
      setTotal(nextTotal)
      setSubtotal(subtotal - price)
    }
   
  }



  return (<View style={{display: 'flex', flexDirection: 'row'}}>

    <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white'}}>
      {amount} x {type}
    </Text>

  
 
  <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white', textAlign: 'right', paddingRight: 5}}>£{total}</Text>
  <TouchableOpacity onPress={reduceAmount}>
    <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white', textAlign: 'right', paddingRight: 5}}>-</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={addAmount}>
    <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white', textAlign: 'right', paddingRight: 5}}>+</Text>
  </TouchableOpacity>

</View>)

}

function TicketSection({tickets, setSubtotal, subtotal}){
  return(<>{tickets.map((ticket, index) =>  (<TicketOrder key={index + ticket.price} subtotal={subtotal} setSubtotal={setSubtotal} price={ticket.price} type={ticket.type}/>))}</>)
}

function PaymentModal({cancelTicket, event}) {
  const [isModalVisible, setModalVisible] = useState(true);
  const [isPaymentSuccessful, setisPaymentSuccessful] = useState(false);
  const [paymentSucess, setPaymentSuccess] = useState(true);
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)

  const eventTitle = event.name;
  const tickets = event.tickets;

  function isValidEmail(email) {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  }
  function isValidPhoneNumber(phoneNumber) {
    // Regular expression to validate phone numbers with optional country code and no delimiters
    const phoneRegex = /^(\+?\d{1,3})?(\d{10})$/;
    return phoneRegex.test(phoneNumber);
  }


  const EventTitle = (
    <View style={{height: 'auto', marginTop: 10}}>
      <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'grey'}}>Event</Text>
      <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white'}}>{eventTitle}</Text>
    </View>
  );

  const OrderDetails = (
    <View style={{marginTop: 20}}>
      <TicketSection tickets={tickets} setSubtotal={setTotal} subtotal={total}/>
      <View style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white'}}>Subtotal</Text>
        <Text style={{flex: 1, fontSize: 20, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: 'white', textAlign: 'right', paddingRight: 5}}>£{total}</Text>
      </View>
    </View>
  );

  const PersonalDetailInputs = (
    <View style={{marginTop: 40, marginBottom: 20}}>
      <InputField title='EMAIL' placeholder='Enter your email' writeTo={setEmail} checkValid={isValidEmail} invalidText='Please enter a valid email' box={true} />
      <InputField title='PHONE NUMBER' placeholder='Enter your phone number' writeTo={setPhone} checkValid={isValidPhoneNumber} invalidText='Please enter a valid phone number' box={true} />
    </View>
  );


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    cancelTicket()
  };

  return (
    <View style={{ flex: 1}}>
      {!isPaymentSuccessful ? ( <Modal isVisible={isModalVisible} style={{margin: 0, paddingTop: 15,  backgroundColor: 'black'}}>
        <View style={{ flex: 1, height: '100%', flexDirection: 'column'}}>
          <Text style={{height: '6%', fontSize: 25, fontWeight: '800', marginTop: 10, paddingLeft: 10, color: "#E82251"}}>Payment</Text>
          <ScrollView style={{flex:1, alignSelf:'stretch', display: 'flex', paddingBottom: 20}}>
            {EventTitle}
            {OrderDetails}
            {PersonalDetailInputs}
            
          
          </ScrollView>
          <View style={{gap: 10}}>
              {(isValidEmail(email) && isValidPhoneNumber(phone) && total > 0) ? <GlobalButton onPress={() => setisPaymentSuccessful(true)} title={`Buy now - £${total}`} /> : <GlobalButton disabled title={`Buy now - £${total}`} />}
              <GlobalButton title="Cancel" onPress={toggleModal} />
          </View>
          
        </View>
      </Modal>):
      <Modal isVisible={paymentSucess}>
        <TouchableOpacity  onPress={() => {setPaymentSuccess(false); setisPaymentSuccessful(false); setTotal(0)}}>
          <PaymentSuccess/>
          </TouchableOpacity>
          </Modal>}
     
    </View>
  );
}


const styles = StyleSheet.create({
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

export default PaymentModal;

// borderColor:'red',borderBottomWidth:1,borderTopWidth:1,