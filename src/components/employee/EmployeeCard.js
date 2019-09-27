import React, { Component } from 'react';

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
            </div>
         </div>
    );
  }
}

export default EmployeeCard