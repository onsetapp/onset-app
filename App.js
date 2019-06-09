import React, { PureComponent } from 'react'
import { Font } from 'expo'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
import AWSAppSyncClient from 'aws-appsync'
import awsConfig from './aws-exports'

import Navigation from './src/navigation'
import StatusBarPadding from './src/components/StatusBarPadding'

import './src/lib/amplify'

const client = new AWSAppSyncClient({
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.aws_appsync_region,
  auth: {
    type: awsConfig.aws_appsync_authenticationType,
    apiKey: awsConfig.aws_appsync_apiKey
  }
})

export default class App extends PureComponent {
  state = {
    assetsLoaded: false
  }

  async componentDidMount () {
    await Font.loadAsync({
      'movie-title-ah': require('./assets/fonts/movie-title_ah.ttf')
    })
    this.setState({ assetsLoaded: true })
  }

  render () {
    if (!this.state.assetsLoaded) return null
    return (

      <StatusBarPadding>
        <ApolloProvider client={client}>
          <Rehydrated>
            <Navigation />
          </Rehydrated>
        </ApolloProvider>
      </StatusBarPadding>
    )
  }
}
