import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }
    
    
    render() {

        const { name, phone, shift, employeeUpdate } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input 
                    label='Name :' 
                    placeholder='John Doe' 
                    value={name}
                    onChangeText={(text)=> employeeUpdate({prop: 'name',value: text})} />
                </CardSection>
                
                <CardSection>
                    <Input 
                    label='Phone :' 
                    placeholder='555-555-55550' 
                    value={phone}
                    onChangeText={(text)=> employeeUpdate({prop: 'phone',value: text})}/>
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>
                        Shift
                    </Text>
                    
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => employeeUpdate({prop: 'shift',value: day})}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thrusday' value='Thrusday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const style = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state, ownProps) => {
    
    const { name, phone, shift } = state.employeeForm
    
    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps,{ 
    employeeUpdate, employeeCreate })(EmployeeCreate);