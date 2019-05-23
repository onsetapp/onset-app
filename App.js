import React, { PureComponent } from 'react';
import { Font } from 'expo';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';

import Navigation from './src/navigation';
import StatusBarPadding from './src/components/StatusBarPadding';

import './src/amplify';

const client = new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: aws_config.aws_appsync_authenticationType,
    apiKey: aws_config.aws_appsync_apiKey,
  }
});

export default class App extends PureComponent {
x
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
        <ApolloProvider client={ client }>
          <Rehydrated>
            <Navigation />
          </Rehydrated>
        </ApolloProvider>
      </StatusBarPadding>
    );
  }
}
