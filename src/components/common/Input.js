import React,{ Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export class Input extends Component {
    
    constructor(props){
        super(props);
    }

    style = {
        inputStyle: {
            color: '#000',
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 18,
            lineHeight: 23,
            flex: 2

        },
        labelStyle: {
            fontSize: 18,
            paddingLeft: 20,
            flex: 1,

        },
        containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }
    }
    
    render() {
        const {inputStyle,labelStyle,containerStyle} = this.style;
        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>
                    {this.props.label}
                </Text>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry}
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}