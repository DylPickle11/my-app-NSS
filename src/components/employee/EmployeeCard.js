import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
    render() {
        return (
          <div className="card">
            <div className="card-content">
              <picture>
              <img src={require('./employee.jpg')} alt="The Employee" />
              </picture>
             <h3>Name: <span className="card-employName">{this.props.employee.name}</span></h3>
             <p>Position:{this.props.employee.position}</p>
             <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
             <button type="button" onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>
             <button type="button" onClick={() => this.props.deleteEmployees(this.props.employee.id)}>Fire!</button>
            </div>
         </div>
    );
  }
}

export default EmployeeCard