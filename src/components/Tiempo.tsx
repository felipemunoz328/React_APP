import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text,
  View, Dimensions, ActivityIndicator, Alert
} from 'react-native';

import {URL_USERS} from './../constants/';

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

    fetch(URL_USERS, {
      
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
          if (typeof(responseJson) == "object"){
            this.setState({resultado: "Direcciones mal ingresadas!!"})
          }else{this.setState({resultado : responseJson})}
         // console.log(this.state.resultado);
        })
        .catch((error) => {
    });

  }


  render() {
    return (
      <React.Fragment>

          <View style = {styles.container}>        


          {this.state.resultado > 0  || (typeof(this.state.resultado) == "string") ?
        
            <View >

              <Text style = {{fontSize : 20, textAlign:'center', margin : 3}}>
                  {`${this.props.navigation.state.params.address}, ${this.props.navigation.state.params.number}, ${this.props.navigation.state.params.city}`}
              </Text>

              <Text style = {{fontSize : 16, textAlign:'center', margin : 3}}>Hasta</Text>


              <Text style = {{fontSize: 20, textAlign:'center', margin : 3}}>
                  {`${this.props.navigation.state.params.addressDes}, ${this.props.navigation.state.params.numberDes}, ${this.props.navigation.state.params.cityDes}`}
              </Text>

              {(typeof(this.state.resultado)=="string") ?
                  <View>
                    <Text style = {styles.resultado}>
                      {`${this.state.resultado}`}
                    </Text>
                  </View>:

                  <View>
                    <Text style = {styles.resultado}>
                      {`${this.state.resultado} Minutos`}
                    </Text>
                  </View>
              }

            </View>
            :<ActivityIndicator size="large" color="#11B8FF" />
          }

          </View>
   
      </React.Fragment>



    );
  }
}

const styles = {
  container: {
    justifyContent: 'center' as 'center',
    backgroundColor: '#FFFFFF',
    flex: 1
  },

  inicioTitle:{
    fontSize: 16,
  },destinoText: {

    
    fontSize: 20
  }, inicioText: {

  },
  resultado: {
    fontSize: 26,
    textAlign:'center' as 'center',
    margin : 5,
    fontWeight: "bold" as 'bold'
    
  },

}

export default Tiempo;