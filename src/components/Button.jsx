import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GlobalRed} from './GlobalStyles';

// Usage:
// <Button title='hello' onPress={pressFunction} small={false}/>

class GlobalButton extends Component {
  constructor(props) {
	super(props);
  }

  render() {
    const defaultWidth = this.props.small ? 200 : 300;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[{width: defaultWidth}, styles.button]}
          onPress={this.props.onPress}>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalRed,
    alignItems: 'center',
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    padding: 10,
  },
});

export default GlobalButton;
