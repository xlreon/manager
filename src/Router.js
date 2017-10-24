import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmpoyeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return (
        
        <Router sceneStyle={{paddingTop: 65}}> 
        <Scene key='root' modal hideNavBar>
        <Scene key='auth'>
        <Scene key='login'
                component={LoginForm}
                title="Please Login"
            />
        </Scene>
        <Scene key='main'>
        <Scene  key='empList'
                onRight={()=>Actions.employeeCreate()}
                rightTitle='Add'
                component={EmployeeList}
                title='Employees'
        />
        <Scene  key='empCreate'
                title='Create Employee'
                component={EmpoyeeCreate}
        />
        </Scene>
        </Scene>
        </Router>
    );
};

export default RouterComponent;