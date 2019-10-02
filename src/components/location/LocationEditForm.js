import React, { Component } from "react"
import AnimalManager from "../../modules/AnimalManager"
//import "./AnimalForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
        name: "",
        address: "",
        phoneNumber: "",
        loadingStatus: true
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.location.name,
        address: this.state.location.address,
        phoneNumber: this.state.location.phoneNumber
      };

      AnimalManager.update( "locations", editedLocation)
      .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
      AnimalManager.get("locations", this.props.match.params.locationId)
      .then(location => {
          this.setState({
            name: location.name,
            address: location.address,
            phoneNumber: location.phoneNumber,
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
              <label htmlFor="locationName">Location name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                value={this.state.address}
              />
              <label htmlFor="address">address</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phoneNumber"
                value={this.state.phoneNumber}
              />
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default LocationEditForm