import React from 'react';
import {Router, Scene} from 'react-native-reactive';

// view and model for Counter scene
import Counter from './components/Counter';
import {increase, decrease, counter, total} from './model/counter';

export default () =>
  <Router>
    <Scene key="launch" component={Counter} hideNavBar {...{increase, decrease, counter, total}}/>
  </Router>
