import React, { PureComponent } from 'react';
import { Font } from 'expo';

import MainView from './src/views/MainView';
import StatusBarPadding from './src/components/StatusBarPadding';

export default class App extends PureComponent {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'movie-title-ah': require('./assets/fonts/movie-title_ah.ttf'),
    });
    this.setState({fontLoaded: true});
  }

  render() {
    if (!this.state.fontLoaded) return null;
    return (
      <StatusBarPadding>
        <MainView />
      </StatusBarPadding>
    );
  }
}
