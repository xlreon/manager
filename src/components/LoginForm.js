import React, { Component } from 'react';
import { Text } from 'react-native'
import { Card, CardSection,Input,Button, Spinner } from './common/';
import { connect } from 'react-redux';
import { emailChanged, passChanged, loginUser } from '../actions';



class LoginForm extends Component {
    
    constructor(props){
        super(props); 
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passChanged(text);
    }

    onButtonPress() {
        const { email, pass } = this.props;
        this.props.loginUser({email, pass});
    }

    renderButton() {
        if(this.props.loading) {
           return <Spinner size='large'/>
        }
        else
        {
           return ( 
                    <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                    </Button>
                  );
        }
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email :"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password :"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.pass}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        pass: state.auth.pass,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps,{ emailChanged, passChanged, loginUser })(LoginForm);