import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
          <div className="card">
            <div className="card-content">
              <picture>
              <img src={require('./catBoss.jpg')} alt="The Employee" />
              </picture>
             <h3>Name: <span className="card-employName">Marty Han</span></h3>
             <p>Position: Dog Groomer</p>
            </div>
         </div>
    );
  }
}

export default OwnerCard