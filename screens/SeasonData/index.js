import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Loading from '../../components/Loading';
import { Button, Text } from 'native-base';

import Logo from '../../components/Logo';

export default class Races extends Component {
  static navigationOptions = {
    headerTitle: 'Fórmula 1',
  }

  state = {
    data: {},
    loading: true,
  }
  
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  getData(year) {
    this.props.navigation.navigate('Races', { season: year });
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.setState({ loading: false, data: { season: season }});    
  }
 
  render() {
    if (this.state.data.length === 0) {
      return <Loading show={ this.state.loading } color="blue" />   
    }

    return (
      <View style={ styles.container }>
        <Logo />
        <Text style={{marginTop: 15, marginBottom: 15, textAlign: 'center', width: '100%'}}>{ this.state.data.season }</Text> 
        <Button  style={styles.buttons}
          onPress={ () => this.props.navigation.navigate('Races', { season: this.state.data.season}) }><Text style={styles.textButton}>Corridas</Text>
        </Button>      
        <Button  style={styles.buttons}
          onPress={ () => this.props.navigation.navigate('Drivers', { season: this.state.data.season}) }><Text style={styles.textButton}>Pilotos</Text>
        </Button>      
        <Button  style={styles.buttons}
          onPress={ () => this.props.navigation.navigate('Constructors', { season: this.state.data.season}) }><Text style={styles.textButton}>Construtores</Text>
        </Button>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    width: '100%', 
  },
  buttons: {
    margin: 20,
    marginLeft: 30, 
    marginRight: 30,
    padding: 30,
  }
});