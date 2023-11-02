import { Component } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { GlobalRed, GlobalWhite, GlobalOffWhite } from '../../GlobalStyles';

// Usage: <InputField title='Name' placeholder='Enter your name' writeTo={this.writeName} checkValid={this.checkName} text={this.state.name} invalidText='Please enter a valid name' box={true} />

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalid: false,
      valid: false,
      editing: false,
    };
  }

  render() {
    const onChangeText = (text) => {
      this.props.writeTo(text);
      this.setState({
        invalid: text.length !== 0 && !this.props.checkValid(text),
        valid: text.length !== 0 && this.props.checkValid(text),
      });
    };

    const inputStyle = [
      styles.input, 
      {
        borderWidth: (this.props.box) ? 1 : 0,
        borderBottomWidth: (this.state.editing) ? 1 : 0,
        paddingHorizontal: (this.props.box) ? 10 : 0,
        borderColor: (this.state.valid) ? 'lightgreen' : (this.props.box) ? GlobalRed : GlobalWhite
      }
    ];

    return (
      <>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={inputStyle}
            onChangeText={onChangeText}
            value={this.props.text}
            placeholder={this.props.placeholder}
            placeholderTextColor={GlobalOffWhite}
            textColor={GlobalWhite}
            onPressIn={() => this.setState({ editing: true })}
            onSubmitEditing={() => this.setState({ editing: false })}
          />
          <Text style={styles.icon}>✏️</Text>
        </View>
        {this.state.invalid ? (
          <Text style={styles.invalidText}>{this.props.invalidText}</Text>
        ) : (
          <Text style={styles.invalidText}> </Text>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 20,
    color: GlobalWhite,
    fontSize: 18,
    width: '85%',
  },
  title: {
    color: GlobalRed,
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold'
  },
  invalidText: {
    color: GlobalRed,
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between', // Align the icon to the right
  },
  icon: {
    alignSelf: 'center',
    transform: [{ rotate: '90deg'}],
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 16,
  }
});

export default InputField;
