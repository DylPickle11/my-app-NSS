import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';

class EmployeeDetail extends Component {

  state = {
    name: "",
    position: "",
    loadingStatus: true
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete("employees", this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
}

  componentDidMount(){
    //console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get("employees", this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        position: employee.position,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
        <div className="card">
          <div className="card-content">
            <picture>
            <img src={require('./employee.jpg')} alt="The Employee" />
            </picture>
            <h3>Name: <span className="card-employName">{this.state.name}</span></h3>
            <p>Position:{this.state.position}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
       </div>
    );
  }
}

export default EmployeeDetail;