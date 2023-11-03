import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { GlobalRed } from '../../GlobalStyles'

// Usage: <PageTitle title='Events' />

class PageTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.title, this.props.styles]}>{this.props.title}</Text>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: GlobalRed,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 50,
    alignSelf: 'flex-start',
  }
})

export default PageTitle;
