import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import { Redirect } from "react-router-dom";
import { inferredPredicate } from '@babel/types';

class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
      image: "",
      loadingStatus: true,
      animal: false
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete("animals", this.props.animalId)
    .then(() => this.props.history.push("/animals"))
}

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get("animals", this.props.animalId)
    .then((animal) => {
       if (animal.name) {
        const animal = true
      this.setState({
        name: animal.name,
        breed: animal.breed,
        image: animal.image,
        loadingStatus: false,
        animal: animal
      });
       }
    });
  }

  render () {
   //if (this.state.loadingStatus) return <p>Loading...</p>
   if (!this.state.loadingStatus && this.state.animal) {

    return (
      <div className="card">
        <div className="card-content">
          <picture>
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
    } else {
    return <Redirect to="/"/>
    }
  }
}

export default AnimalDetail;