# react-native-reactive
React Native Reactive Model-View using react-native-router-flux and Reactive Programming

## What is it?
It is alternative to Redux. Redux is great, but you have to code a lot of boilerplate to use it:
  1. create string actions constants for each action
  2. build bulky switch statements within your reducers
  3. `connect` each component to redux or create componentShouldUpdate to prevent re-rendering each state change (i.e. define minimal necessary 'sub-state' of your state which is necessary for your component).
  4. import action constants and call quite bulky `this.props.dispatch({type:ACTION_CONSTANT, ...data})` for action.

Reactive Model-View is similar to [Model-View-Intent from Cycle.JS](http://cycle.js.org/model-view-intent.html) or [MVC-Reactivated](http://kumarishan.in/clientside-mvc-reactivated)
and mostly based on [Calmm-JS](https://github.com/calmm-js/documentation/blob/master/introduction-to-calmm.md), [slides](http://calmm-js.github.io/documentation/training/#/).

[Introduction to Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

Instead of creation of reducers/actions you have to create Reactive Model, aka "Reactive State" using supported reactive library ([Kefir](http://rpominov.github.io/kefir)/[Bacon](https://baconjs.github.io)).
Everything could be represented as event stream or Observables. To represent your store [Calmm-JS](https://github.com/calmm-js/documentation/blob/master/introduction-to-calmm.md) introduces Atom, 
Observable 'property' which easily could be set/get from your React Components. You could consider Atom as replacement of your Redux Store
and Obserables (that observe your Atom(s)) are replacements of reducers. 

[React Native Router Flux](https://github.com/aksonov/react-native-router-flux) is used to connect your Reactive Model and your React components.
It wraps each component Scene with special wrapper that replaces all observables to their actual values. Once any passed observable changes,
the component will be re-rendered with new values. Note that you could pass only needed sub-state of your Atom(s) using [Partial Lenses](https://github.com/calmm-js/partial.lenses)
to avoid needless re-rendering of the components.

## How to use it?
This component is just thin wrapper around react-native-router-flux (RNRF), so just import it instead of RNRF.

Example of reactive model counter:

![demo](https://cloud.githubusercontent.com/assets/1321329/15446716/b4639f86-1f29-11e6-960d-5ba0c6f8fc47.gif)

Example.js:
```jsx
import React from 'react';
import {Router, Scene} from 'react-native-reactive';

// view and model for Counter scene
import Counter from './components/Counter';
import {increase, decrease, counter, total} from './model/counter';

export default () =>
  <Router>
    <Scene key="launch" component={Counter} hideNavBar {...{increase, decrease, counter, total}}/>
  </Router>
```

counter.js (reactive model)
```jsx
import Atom from 'kefir.atom';

// our simplest store ever - counter
export const counter = Atom(0).log("counter");

export function increase(){
  counter.modify(x=>x+1);
}

export function decrease(){
  counter.modify(x=>x-1);
}

// example of 'computed' value = number of total operations
export const total = counter.scan((prev, next) => prev + 1, -1);
```

Counter.js (view)
```jsx
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

```
