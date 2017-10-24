import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class EmployeeList extends Component {
    
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.employees)
    }

    renderRow(employee){
        return <ListItem employee={employee} />
    }
    
    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const employees = _.map(state.employees,(val,uid)=> {
        return {...val,uid};
    })
    
    return {
        employees
    };
}

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);