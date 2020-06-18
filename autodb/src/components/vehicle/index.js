import React, {Component} from 'react';
import TableVehicle from './vehicleTable'

class Vehicles extends Component {

  constructor(){
    super();
    this.state = { vehicles: []};
    
  }
  componentDidMount() {
    
    fetch('http://localhost:5000/db/vehicle')
      .then(response => response.json())
      .then(vehicles => (this.setState({vehicles})))
        .catch(err => console.warn(err));
  }
    
    render (){
      return(
        <TableVehicle rows = {this.state.vehicles}/>
      )
  }
}

export default Vehicles;
