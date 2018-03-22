import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyClIc2qVweg976OG_3IcFcyS5XV6KG7eJI',
      authDomain: 'manager-86a42.firebaseapp.com',
      databaseURL: 'https://manager-86a42.firebaseio.com',
      projectId: 'manager-86a42',
      storageBucket: 'manager-86a42.appspot.com',
      messagingSenderId: '373038812628'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;
