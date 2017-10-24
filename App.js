import React, { Component } from 'react'
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import { Header  } from './src/components/common';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCivXUf7f52y1-rbPuNNhTv3CTlqXWSmNQ",
      authDomain: "manager-5248e.firebaseapp.com",
      databaseURL: "https://manager-5248e.firebaseio.com",
      projectId: "manager-5248e",
      storageBucket: "",
      messagingSenderId: "1002123512184"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
        </Provider>
    );
  }
}