import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Button from 'react-native-button';

const Counter = (model) =>
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native Reactive!
    </Text>
    <Text>Counter: {model.counter}</Text>
    <Text>Total clicks: {model.total}</Text>
    <Button onPress={model.increase}>+</Button>
    <Button onPress={model.decrease}>-</Button>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Counter;
