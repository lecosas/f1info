import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

import ConstructorsComponent from './components/constructorscomponent';

export default class Constructors extends Component {
  static navigationOptions = {
    headerTitle: 'Fórmula 1 - Construtores',
  }

  state = {
    data: [],
    season: '',
    loading: true,
  }
  
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.state.season = season;
    this.getData(season);
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/constructors.json`)
      .then((response) => response.json())
      .then((response) => {
        const constructors = response.MRData.ConstructorTable.Constructors;
        this.setState({ loading: false, data: constructors });
      })
      .catch(err => console.error(err)        
      );

  }

  render() {
    if (this.state.data.length === 0) {
      return <Loading show={ this.state.loading } color="blue" />   
    }

    return (
      <ScrollView style={ styles.scrollView}>
        <View style={ styles.container }>
          <Logo />
          <Text style={{marginTop: 15, marginBottom: 15, textAlign: 'center', width: '100%'}}>{ this.state.season + ' - Construtores'}</Text> 
          <ConstructorsComponent constructors= {this.state.data } />
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