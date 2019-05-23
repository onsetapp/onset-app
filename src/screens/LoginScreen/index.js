import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';

Auth.configure({

});

import Header from '../../components/Header';

export default class LoginScreen extends React.Component {

  state = {
    username: 'jcuffney',
    password: 'Yggrasil8',
  };

  handleTextChange = text => {
    this.setState({ text });
  }

  handleLogin = async () => {
    const { username, password  } = this.state
    console.log('about to sign in');
    try {
      await Auth.signIn(username, password);
      console.log('sign in successful!')
      this.props.navigation.navigate('Main');
      Alert.alert('Success!');
    } catch{
      Alert.alert('Wrong Password!');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>Login</Header>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.handleLogin }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8f8e90',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    marginBottom: 10,
  },
});
