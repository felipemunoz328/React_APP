import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text,
  View, Dimensions,
} from 'react-native';
import {URL_USERS} from './../constants';

const windowWidth = Dimensions.get('window').width;

interface Props {
  test?: Function | Object
  navigation: {
      state: {
          params: {
              address: string;
              city: string;
              country: string;
              county: string;
              number: number | string;
              addressDes: string
              cityDes: string,
              countryDes: string,
              countyDes: string,
              numberDes: Number | string,
          }
      }
  }
}


interface State {
  resultado: Number | String
}


class Tiempo extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      resultado : 0,
      
    };
  }


  componentDidMount() {

    const {address, city, country, county, number, addressDes, cityDes, countryDes, countyDes, numberDes} = this.props.navigation.state.params;

    const res = fetch(URL_USERS, {
      
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(

        {
        "destino": {
          "address": addressDes,
          "city": cityDes,
          "country": countryDes,
          "county": countyDes,
          "number": numberDes
        },
        "inicio": {
          "address": address,
          "city": city,
          "country": country,
          "county": county,
          "number": number
        }
        
    }),
    }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({resultado : responseJson})
          console.log(responseJson);
        })
        .catch((error) => {
    });

  }


  render() {
    return (
      <React.Fragment>
        <View>
          <Text style = {styles.textMain}>
            {this.props.navigation.state.params.address}
            {this.props.navigation.state.params.number}
            {this.props.navigation.state.params.city}
          </Text>
        </View>
      </React.Fragment>



    );
  }
}

const styles = {
  inputContainer: {
  },
  textMain : {
    fontSize: 12
  }
}


export default Tiempo;