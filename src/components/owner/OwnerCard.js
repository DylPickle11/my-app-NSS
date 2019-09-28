import React, { Component } from 'react';

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
            </div>
         </div>
    );
  }
}

export default OwnerCard