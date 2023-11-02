import React, { Component } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { GlobalRed, GlobalWhite } from './GlobalStyles'

// Usage:
// <InputField title='hello' writeTo={writeToFunction}} text='' placeholder=''/>

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <TextInput
          style={styles.input}
          selectionColor={GlobalRed}
          onChangeText={this.props.writeTo}
          value={this.props.text}
          placeholder={this.props.placeholder}
          placeholderTextColor={GlobalWhite}
          textColor={GlobalWhite}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    marginTop: 2,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: GlobalRed,
    color: GlobalWhite,
  },
  title: {
    color: GlobalRed,
    paddingLeft: 10,
  }
})

export default InputField;
