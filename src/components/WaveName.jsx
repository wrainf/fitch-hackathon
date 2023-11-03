import React, { Component } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';
import { GlobalWhite } from '../../GlobalStyles'

class WavingHandEmoji extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(-1);
  }

  componentDidMount() {
    this.animateHandWave();
  }

  animateOpposite = () => {
    Animated.timing(this.animatedValue, {
      toValue: -1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      this.animateHandWave()
    })
  }

  animateHandWave = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      this.animateOpposite();
    });
  };

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [-1, -0.5, 0 , 0.5, 1],
      outputRange: ['-20deg', '-15deg', '0deg', '15deg', '20deg'],
    });

    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }],
    };

    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.emoji, animatedStyle]}>✋</Animated.Text>
        <Text style={{fontSize: 25, paddingLeft: 5, color: GlobalWhite}}>{this.props.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 42,
  },
});

export default WavingHandEmoji;
