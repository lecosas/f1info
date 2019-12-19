import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Seasons from './components/seasons';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Fórmula 1',
  }

  state = {
    data: null,
    loading: true,
  }

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }

  getData(year) {
    this.props.navigation.navigate('SeasonData', { season: year });
  }
  
  render() {   
    return (
      <SafeAreaView style={ styles.container }>
        <ScrollView style={ styles.scrollView}>
          <Logo />
          <Text style={{marginTop: 15, marginBottom: 15, textAlign: 'center', width: '100%'}}>Temporadas</Text>        
          <Seasons handleSeason={ this.getData } />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
