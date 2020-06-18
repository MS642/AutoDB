import React, {Component} from 'react';
import TableAccident from './accidentTable'

class Accidents extends Component {

  constructor(){
    super();
    this.state = { accidents: []};
    
  }
  componentDidMount() {
    
    fetch('http://localhost:5000/db/accidents')
      .then(response => response.json())
      .then(accidents => (this.setState({accidents})))
        .catch(err => console.warn(err));
  }
    
    render (){
      return(
        <TableAccident rows = {this.state.accidents}/>
      )
  }
}

export default Accidents;
