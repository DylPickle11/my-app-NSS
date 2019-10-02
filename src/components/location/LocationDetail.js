import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';

class LocationDetail extends Component {

  state = {
    name: "",
    address: "",
    phoneNumber: "",
    loadingStatus: true
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete("locations", this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get("locations", this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        phoneNumber: location.phoneNumber,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dogInn.jpg')} alt="The location" />
          </picture>
            <h3>name: <span className="card-employName">{this.state.name}</span></h3>
            <p>address:{this.state.address}</p>
            <p>Phone number:{this.state.phoneNumber}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;