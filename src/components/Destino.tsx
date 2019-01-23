import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text,
    View, Dimensions, TextInput,
    TouchableOpacity,ScrollView, Alert
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Tiempo from './../components/Tiempo'

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
            }
        }

    }
}


interface State {
    address: string;
    city: string;
    country: string;
    county: string;
    number: Number | string;
    addressDes: string
    cityDes: string,
    countryDes: string,
    countyDes: string,
    numberDes: Number | string,
}

/*type Style = {
    width: number; height: number; padding: number; justifyContent: string; alignItems: string; borderRadius: number; backgroundColor: string; paddingTop: number; 
};*/

class Destino extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        console.log(props);

        this.state = {
            address: "",
            city: "",
            country: "",
            county: "",
            number: 0,
            addressDes: "",
            cityDes: "",
            countryDes: "",
            countyDes: "",
            numberDes: 0,
        };

    }

 

    continuar = () => {
        const { addressDes, cityDes, countryDes, countyDes, numberDes} = this.state;
        
        if (!(addressDes.length > 0 && cityDes.length > 0 && countryDes.length > 0 && countyDes.length > 0, numberDes > 99)) {
          Alert.alert(
            'Error',
            'Porfavor ingrese los datos de forma correcta',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          )
        }else{
             return this.props.navigation.navigate("Tiempo", this.state);

        }
      }


    componentDidMount(){

        const {address, city, country, county, number } = this.props.navigation.state.params;

        this.setState({
            address,
            city,
            country,
            county,
            number, 
        })
    }



    

    render() {    


        return (
            <React.Fragment>
                <KeyboardAwareScrollView enableAutomaticScroll>
                    <ScrollView contentContainerStyle = {styles.ScrollContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Dirección</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"Antonio varas"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(addressDes) => this.setState({ addressDes })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Ciudad</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"santiago"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(cityDes) => this.setState({ cityDes })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>País</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"chile"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(countryDes) => this.setState({ countryDes })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Comuna</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"providencia"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(countyDes) => this.setState({ countyDes })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Number</Text>
                            <TextInput 
                                keyboardType="numeric"
                                returnKeyType="go"
                                maxLength={4}                                
                                style={styles.inputStyle}
                                placeholder={"880"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={( numberDes) => this.setState({ numberDes })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <TouchableOpacity style={styles.button} onPress = {this.continuar}>
                                <Text style={styles.buttonText}>Continuar</Text>
                            </TouchableOpacity>
                        </View>

                    

                    </ScrollView>
                </KeyboardAwareScrollView>

            </React.Fragment>

        );
    }
}




const styles = {
    inputContainer: {
        paddingTop: 20,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 14
    },
    inputStyle: {
        width: windowWidth - 100,
        height: 60 ,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#ECF0F3',
        paddingHorizontal: 19
    },
    button: {
        width: windowWidth - 100,
        height: 50,
        padding: 15,
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        borderRadius: 6,
        backgroundColor: '#11B8FF',
        paddingTop: 10,
    },
    buttonText: {
        color: 'white', fontSize: 20,
    },  
    ScrollContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 18,
  },
}

export default Destino;