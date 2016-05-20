import React from 'react';
import {
  Actions,
  DefaultRenderer,
  Modal,
  NavBar,
  Reducer,
  Router as OriginalRouter,
  Scene,
  Switch,
  TabBar,
  getInitialState,
  Util,
} from 'react-native-router-flux';
import {fromClass} from "kefir.react.native"

function Router(props){
  return <OriginalRouter wrapBy={fromClass} {...props}/>
}
export {
  Actions,
  DefaultRenderer,
  Modal,
  NavBar,
  Reducer,
  Router,
  Scene,
  Switch,
  TabBar,
  getInitialState,
  Util,
};
