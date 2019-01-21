import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text,
    View, Dimensions, TextInput,
    TouchableOpacity,ScrollView, Alert
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { StackNavigator, NavigationScreenProp } from 'react-navigation';


const windowWidth = Dimensions.get('window').width;

interface styles{

}

interface Props {
    test?: Function | Object
   // navigation?: NavigationProp<any, NavigationAction>

}


interface State {
    address: string;
    city: string;
    country: string;
    county: string;
    number: number | string;
}

class Inicio extends Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            address: "",
            city: "",
            country: "",
            county: "",
            number: 0,
        };

    }

    continuar = () => {
        const { address, city, country, county, number} = this.state;
        
        if (!(address.length > 0 && city.length > 0 && country.length > 0 && county.length > 0, number > 99)) {
          Alert.alert(
            'Error',
            'Porfavor ingrese los datos de forma correcta',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          )
        }else{
             return this.props.navigation.navigate("Destino", this.state);

        }

    
    
      }


    render() {
        return (
            <React.Fragment>
                <KeyboardAwareScrollView enableAutomaticScroll>
                <ScrollView contentContainerStyle = {styles.ScrollContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>address</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"apoquindo"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(address) => this.setState({ address })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>city</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"santiago"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(city) => this.setState({ city })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>country</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"chile"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(country) => this.setState({ country })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>county</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"las condes"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(county) => this.setState({ county })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>number</Text>
                            <TextInput 
                                keyboardType="numeric"
                                returnKeyType="go"
                                maxLength={4}                                
                                style={styles.inputStyle}
                                placeholder={"4820"}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(number) => this.setState({ number })}
                                placeholderTextColor={'gray'} />
                        </View>


                        <View style={styles.inputContainer}>
                            <TouchableOpacity style={styles.button}  onPress={this.continuar} >
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
        height: 60,
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
        alignItems: 'center' ,
        justifyContent: 'flex-start',
        paddingTop: 18,
  },
}

export default Inicio;