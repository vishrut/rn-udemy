import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBhl0BDqf2YHNhHTSJMcAOKPRN4Z_cMj24",
      authDomain: "auth-84f86.firebaseapp.com",
      databaseURL: "https://auth-84f86.firebaseio.com",
      projectId: "auth-84f86",
      storageBucket: "auth-84f86.appspot.com",
      messagingSenderId: "907886972711"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
        return (
          <View flexDirection="row">
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View flexDirection="row">
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
