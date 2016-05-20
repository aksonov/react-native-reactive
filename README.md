# react-native-reactive
React Native Reactive Model-View using react-native-router-flux and Reactive Programming

# What is it?
It is alternative to Redux. Redux is great, but you have to code a lot of boilerplate to use it:
  1. create string actions constants for each action
  2. build bulky switch statements within your reducers
  3. `connect` each component to redux or create componentShouldUpdate to prevent re-rendering each state change (i.e. define minimal necessary 'sub-state' of your state which is necessary for your component).
  4. import action constants and call quite bulky `this.props.dispatch({type:ACTION_CONSTANT, ...data})` for action.

Reactive Model-View is similar to [Model-View-Intent from Cycle.JS](http://cycle.js.org/model-view-intent.html) or [MVC-Reactivated](http://kumarishan.in/clientside-mvc-reactivated)
and mostly based on [Calmm-JS](https://github.com/calmm-js/documentation/blob/master/introduction-to-calmm.md), [slides](http://calmm-js.github.io/documentation/training/#/).

[Introduction to Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

Instead of creation of reducers/actions you have to create Reactive Model, aka "Reactive State" using supported reactive library (KefirJS/Bacon).
Everything could be represented as event stream or Observables. To represent your store [Calmm-JS](https://github.com/calmm-js/documentation/blob/master/introduction-to-calmm.md) introduces Atom, 
Observable 'property' which easily could be set/get from your React Components. You could consider Atom as replacement of your Redux Store
and Obserables (that observe your Atom(s)) are replacements of reducers. 

[React Native Router Flux](https://github.com/aksonov/react-native-router-flux) is used to connect your Reactive Model and your React components.
It wraps each component Scene with special wrapper that replaces all observables to their actual values. Once any passed observable changes,
the component will be re-rendered with new values. Note that you could pass only needed sub-state of your Atom(s) using [Partial Lenses](https://github.com/calmm-js/partial.lenses)
to avoid needless re-rendering of the components.

Example of reactive model counter (without usage of React Native Router Flux yet):
https://github.com/aksonov/react-native-reactive-counter-example
