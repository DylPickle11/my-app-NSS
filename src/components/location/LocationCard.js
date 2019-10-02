import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {


        return (
          <div className="card">
            <div className="card-content">
              <picture>
              <img src={require('./dogInn.jpg')} alt="The Employee" />
              </picture>
             <h3>name: <span className="card-employName">{this.props.locataco.name}</span></h3>
             <p>address:{this.props.locataco.address}</p>
             <p>Phone number:{this.props.locataco.phoneNumber}</p>
             <Link to={`/locations/${this.props.locataco.id}`}><button>Details</button></Link>
             <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.locataco.id}/edit`)}}>Edit</button>
             <button type="button" onClick={()=> this.props.deleteLocation(this.props.locataco.id)}>Discharge</button>
            </div>
         </div>
    );
        }
  }

export default LocationCard