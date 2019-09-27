import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
          <div className="card">
            <div className="card-content">
              <picture>
              <img src={require('./dogInn.jpg')} alt="The Employee" />
              </picture>
             <h3>Name: <span className="card-employName">Marty Han</span></h3>
             <p>Position: Dog Groomer</p>
            </div>
         </div>
    );
  }
}

export default LocationCard