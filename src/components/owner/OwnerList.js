import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import AnimalManager from '../../modules/AnimalManager'


class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

componentDidMount(){
    console.log("OWNER LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll("owners")
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

render(){
    console.log("OWNER LIST: Render");

    return(
        <div className="container-cards">
            {this.state.owners.map(owner => <OwnerCard key={owner.id} owner={owner}/>)}
        </div>
    )
}
}

export default OwnerList