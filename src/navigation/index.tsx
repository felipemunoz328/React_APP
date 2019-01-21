

import { createStackNavigator, createAppContainer } from "react-navigation";


import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Destino from "../components/Destino";
import Inicio from "../components/Inicio";
import Tiempo from "../components/Tiempo";
//import Tiempo from "../components/Tiempo";


 
 export const AppNavigator = createStackNavigator(
    {
      Destino: {
        screen: Destino,
        navigationOptions: {
          title: 'Datos de destino'
        }
      },
      Inicio: {
        screen: Inicio,
        navigationOptions: {
          title: 'Datos de inicio'
        }
      },
      Tiempo: {
        screen: Tiempo,
        navigationOptions: {
          title: 'Resultado'
        }
      }
    },
    {
      initialRouteName: "Inicio"
    }
  );

  const AppContainer = createAppContainer(AppNavigator);

  export default AppContainer;



/*
const AppNavigator = () => {
  return (
    <Router>
      <Stack key="root">
      <Scene key="destino" component={Destino} title="Destino" initial/>
      <Scene key="inicio" component={Inicio} title="Inicio"/>
      </Stack>
    </Router>
  );
}

export default AppNavigator;
*/

