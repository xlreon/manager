import React , { Component } from 'react';
import { Text, View } from 'react-native';

const Styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.35,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
      fontSize: 20
    }
  }

export class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {textStyle, viewStyle} = Styles
        return (
            <View style={viewStyle}>
            <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}