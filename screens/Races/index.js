import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

import RacesComponent from './components/races';

export default class Races extends Component {
  static navigationOptions = {
    headerTitle: 'Fórmula 1 - Corridas',
  }

  state = {
    data: [],
    season: 0,
    loading: true,
  }
  
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.handleRaces = this.handleRaces.bind(this);
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.state.season = season;
    this.getData(season);
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((response) => response.json())
      .then((response) => {
        const races = response.MRData.RaceTable.Races;
        this.setState({ loading: false, data: races });
      })
      .catch(err => console.error(err)        
      );

  }

  handleRaces(round) {
    this.props.navigation.navigate('RaceData', { season: this.state.season, round: round })
  }

  render() {
    if (this.state.data.length === 0) {
      return <Loading show={ this.state.loading } color="blue" />   
    }
    
    return (
      <ScrollView style={ styles.scrollView}>
        <View style={ styles.container }>
          <Logo />
          <Text style={{marginTop: 15, marginBottom: 15, textAlign: 'center', width: '100%'}}>{ this.state.season + ' - Corridas'}</Text> 
          <RacesComponent handleRaces={ this.handleRaces } races= {this.state.data } />          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});