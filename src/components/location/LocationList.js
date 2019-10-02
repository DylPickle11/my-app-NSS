import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import AnimalManager from '../../modules/AnimalManager'


class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

componentDidMount(){
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll("locations")
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
    console.log("LOCATIONS LIST: Render");

    return(
        <div className="container-cards">
            {this.state.locations.map(location => <LocationCard key={location.id} locataco={location} deleteLocation={this.deleteLocation} {...this.props}/>)}
        </div>
    )
}

deleteLocation = id => {
    AnimalManager.delete("locations", id)
    .then(() => {
      AnimalManager.getAll("locations")
      .then((newLocations) => {
        this.setState({
            locations: newLocations
        })
      })
    })
  }
}

export default LocationList