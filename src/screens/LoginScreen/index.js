import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

import Header from '../../components/Header';

export default class LoginScreen extends React.Component {

  state = {
    username: '',
    password: ''
  };

  handleTextChange = text => {
    this.setState({ text });
  }

  onLogin() {
    const { username, password } = this.state;
    // Alert.alert('Credentials', `${username} + ${password}`);
    this.props.navigation.navigate('Main');
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
          onPress={this.onLogin.bind(this)}
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
