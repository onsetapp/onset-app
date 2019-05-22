import React, { PureComponent } from 'react';
import { Font } from 'expo';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';

import Navigation from './src/navigation';
import StatusBarPadding from './src/components/StatusBarPadding';

// import { client } from './src/apolloClient';

const jwtToken = 'eyJraWQiOiIwMkpSTnd2YjNQMEQ3NnQxbUw4c0NhRmpMU0ZrT1ZUUGYrYnJQM1dTXC9vdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxNTg5YzhkYS00NjE1LTQ0Y2MtYmY3OS04ZDZlMjNlNzAzYjAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3BHZW4yS3hCMiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJqY3VmZm5leSIsImF1ZCI6IjV1Zzh1Z2c3OWJwMWdsZzNjb2k3bm9obnI2IiwiZXZlbnRfaWQiOiI3YTUwZjI1OS03Y2U5LTExZTktYTEzOC0xZDdmOWNmOWExZGQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU1ODU2Nzc4MywicGhvbmVfbnVtYmVyIjoiKzA1ODU1MDMyNzE0IiwiZXhwIjoxNTU4NTcxMzgzLCJpYXQiOjE1NTg1Njc3ODMsImVtYWlsIjoiam9lQGN1ZmZuZXkuY29tIn0.RkQkPldsmQP_RKRnj6D4pWJ4o2AW96xYOb_26wwaez9oKQPo7DShoEm0Sd0oXfN3tSY6UGAybTMGW5ri6w9XRBkOYJIICgz222l7Fc4nYnB1wxq-Cm1AJqUZWlRDYoL4WA975axiAD1VNGtsF_H2AOFeeIJQi1AzlONxbw-CBb6XmVduhKNFoRXrk-6P7_gc8jJmapj-_LOq80ajy2eF6xHE-b1aHmITSdJ2SWh_yWUO3t8kVR0-RDTyhkl11eIvvSaERF7QDdX6aCNOq_5y7UOfc30czbxquTlNu59ueBVz3KegdJl6tCDjlYGCvhvpanPJn5yqLZVoC6NB5J3Mhg';

const client = new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: aws_config.aws_appsync_authenticationType,
    apiKey: aws_config.aws_appsync_apiKey,
    jwtToken
  }
});

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
        <ApolloProvider client={ client }>
          <Rehydrated>
            <Navigation />
          </Rehydrated>
        </ApolloProvider>
      </StatusBarPadding>
    );
  }
}
