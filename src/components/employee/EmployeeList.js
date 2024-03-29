import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import AnimalManager from '../../modules/AnimalManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll("employees")
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

render(){
    console.log("EMPLOYEE LIST: Render");

    return(
        <div className="container-cards">
            {this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee} deleteEmployees={this.deleteEmployees} {...this.props}/>)}
        </div>
    )
}
deleteEmployees = id => {
    AnimalManager.delete("employees", id)
    .then(() => {
      AnimalManager.getAll("employees")
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }
}



export default EmployeeList