import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
          <div className="card">
            <div className="card-content">
              <picture>
              <img src={require('./dogInn.jpg')} alt="The Employee" />
              </picture>
             <h3>name: <span className="card-employName">{this.props.location.name}</span></h3>
             <p>address:{this.props.location.address}</p>
             <p>Phone number:{this.props.location.phoneNumber}</p>
            </div>
         </div>
    );
        }
  }

export default LocationCard