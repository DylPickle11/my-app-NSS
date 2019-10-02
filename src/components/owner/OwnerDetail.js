import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';

class OwnerDetail extends Component {

  state = {
    name: "",
    phoneNumber: "",
    loadingStatus: true
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete("owners", this.props.ownerId)
    .then(() => this.props.history.push("/owners"))
}

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get("owners", this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: "",
        phoneNumber: "",
        loadingStatus: false
      });
    });
  }

  render() {
    return (
        <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('./catBoss.jpg')} alt="The Employee" />
          </picture>
         <h3>Name: <span className="card-employName">{this.state.name}</span></h3>
         <p>Phone number:{this.state.phoneNumber}</p>
         <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
     </div>
    );
  }
}

export default OwnerDetail;