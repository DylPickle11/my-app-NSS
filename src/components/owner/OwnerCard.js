import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
    render() {
        return (
          <div className="card">
            <div className="card-content">
              <picture>
              <img src={require('./catBoss.jpg')} alt="The Employee" />
              </picture>
             <h3>Name: <span className="card-employName">{this.props.owner.name}</span></h3>
             <p>Phone number:{this.props.owner.phoneNumber}</p>
             <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
             <button type="button" onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
             <button type="button" onClick={() => this.props.deleteAnimal(this.props.owner.id)}>Discharge</button>
            </div>
         </div>
    );
  }
}

export default OwnerCard