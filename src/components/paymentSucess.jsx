import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";

function PaymentSuccess() {
  return (
    <View style={styles.mainBox}>
      <Image source={require("../../assets/Done_ring_round.png")}></Image>
      <Text style={styles.thankyouText}>Thank you for your purchase!</Text>
      <Pressable style={styles.viewOtherWrapper}>
        <Text style={styles.viewOtherText}>{"View other events   >"}</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: 'black',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70
  },
  thankyouText: {
    color: '#E82251',
    fontWeight: '800',
    fontSize: 30,
    marginTop: 20,
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50
  },
  viewOtherWrapper: {
    marginTop: 20,
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
  },
  viewOtherText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'left'
  }
});

export default PaymentSuccess;