import { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalRed, GlobalGrey } from '../../GlobalStyles'

// Usage:
// <Button title='hello' onPress={pressFunction} small={false} disabled/>

class GlobalButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultWidth = (this.props.small) ? 200 : 300;
    const buttonStyle = [
      styles.button,
      {
        backgroundColor: (this.props.disabled) ? GlobalGrey : GlobalRed, 
        width: defaultWidth,
      }
    ]
    return (
      <View style={styles.container}>
        <TouchableOpacity style={buttonStyle} onPress={this.props.onPress} disabled={this.props.disabled}>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
  },
  container: {
    alignContent: 'center',
    alignItems:'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    padding: 10,
  }
})

export default GlobalButton;
