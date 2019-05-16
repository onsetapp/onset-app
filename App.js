import React, { PureComponent } from 'react';
import { Font } from 'expo';
import { ApolloProvider } from 'react-apollo';

import Navigation from './src/navigation';
import StatusBarPadding from './src/components/StatusBarPadding';

import { client } from './src/apolloClient';

export default class App extends PureComponent {

  state = {
    assetsLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'movie-title-ah': require('./assets/fonts/movie-title_ah.ttf'),
    });
    this.setState({assetsLoaded: true});
  }

  render() {
    if (!this.state.assetsLoaded) return null;
    return (
      
      <StatusBarPadding>
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
      </StatusBarPadding>
    );
  }
}
