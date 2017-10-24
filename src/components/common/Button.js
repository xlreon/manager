import React,{ Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export class Button extends Component {
    
    constructor(props){
        super(props);
    }

    style = {
        
        textStyle: {
           alignSelf: 'center',
           color: '#007aff',
           fontSize: 16,
           fontWeight: '600',
           paddingTop: 10,
           paddingBottom: 10
        },

        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginLeft: 5,
            marginRight: 5
        }
    }
    
    
    render() {

        const {
            buttonStyle,
            textStyle
        } = this.style

        return (
        <TouchableOpacity onPress={this.props.onPress} style={buttonStyle}>
        <Text style={textStyle}>{this.props.children}</Text>
        </TouchableOpacity>
               );
    }
}