import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

import Drivers from './components/drivers';

export default class RaceData extends Component {
  static navigationOptions = {
    headerTitle: 'Fórmula 1 - Detalhes Corrida',
  }

  state = {
    data: {
      raceData: [],
      fastestData: [],
      gridData: [],
    },
    loading: true,
  }
  
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const round = this.props.navigation.getParam('round');
    const season = this.props.navigation.getParam('season');
    this.getData(season, round);
  }

  getData(season, round) {
    fetch(`http://ergast.com/api/f1/${season}/${round}/results.json`)
      .then((response) => response.json())
      .then((response) => {
        const raceData = response.MRData.RaceTable.Races;

        fetch(`http://ergast.com/api/f1/${season}/${round}/fastest/1/results.json`)
          .then((response) => response.json())
          .then((response) => {
            const fastestData = response.MRData.RaceTable.Races;

            fetch(`http://ergast.com/api/f1/${season}/${round}/grid/1/results.json`)
              .then((response) => response.json())
              .then((response) => {
                const gridData = response.MRData.RaceTable.Races;

                this.setState({ loading: false, data: {
                  raceData: raceData, 
                  fastestData: fastestData,
                  gridData: gridData  
                }});
                
              })
              .catch(err => console.error(err))
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err)        
    );
  }

  render() {
    if (this.state.data.raceData.length === 0) {
      return <Loading show={ this.state.loading } color="blue" />   
    }

    let fastLap = 'N/A'; //Só tem dados a partir de 2004.
    let fastDriver = 'N/A'; //Só tem dados a partir de 2004.
    if (this.state.data.fastestData[0] && this.state.data.fastestData[0].Results[0].FastestLap.Time.time) {
      fastLap = this.state.data.fastestData[0].Results[0].FastestLap.Time.time; 
      fastDriver = this.state.data.fastestData[0].Results[0].Driver.givenName + ' ' + this.state.data.fastestData[0].Results[0].Driver.familyName; 
    }

    const firstDriver = this.state.data.gridData[0].Results[0].Driver.givenName + ' ' + this.state.data.gridData[0].Results[0].Driver.familyName; 

    return (
      <ScrollView>
        <View style={ styles.container }>
          <Logo />
          <Text> </Text>  
          <Text style={ styles.titulo1 } >{ this.state.data.raceData[0].Circuit.Location.country } </Text>
          <Text style={ styles.titulo2 } >{ this.state.data.raceData[0].Circuit.Location.locality } </Text>
          <Text style={ styles.titulo3 } >{ this.state.data.raceData[0].Circuit.circuitName } </Text>
          <Text> </Text>
          <Text style={ styles.titulo3Bold } >Pole Position:</Text>
          <Text style={ styles.titulo3 } > { firstDriver } </Text>
          <Text> </Text>
          <Text style={ styles.titulo3Bold } >Melhor volta: </Text>
          <Text style={ styles.titulo3 } >{ fastLap }</Text>
          <Text style={ styles.titulo3 } >{ fastDriver }</Text>
          <Text> </Text>
          <Text style={ styles.titulo3 } >Resultado Final</Text>
          <Drivers drivers={ this.state.data.raceData[0].Results } />
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
  },
  titulo1: { 
      fontSize: 36,
  },
  titulo2: { 
        fontSize: 24,
    },
  titulo3: { 
      fontSize: 18,
  },
  titulo3Bold: {
      fontSize: 18, 
      fontWeight: 'bold',
  }

});