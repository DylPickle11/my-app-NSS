import React, { Component } from "react"
import AnimalManager from "../../modules/AnimalManager"
//import "./AnimalForm.css"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
        employeeName:"",
        position: "",
        loadingStatus: true
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.props.state.employeeName,
        position: this.state.employee.position,
      };

      AnimalManager.update( "employees", editedEmployee)
      .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
      AnimalManager.get("employees", this.props.match.params.employeeId)
      .then(employee => {
          this.setState({
            name: employee.name,
            position: employee.position,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="employeeName">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="position"
                value={this.state.position}
              />
              <label htmlFor="position">Position</label>

            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm