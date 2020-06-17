import React, {Component} from 'react';
import TableCustomer from './customerTable'

class Customers extends Component {

  constructor(){
    super();
    this.state = { customers: []};
    
  }
  componentDidMount() {
    fetch('http://localhost:5000/db/customer')
      .then(response => response.json())
      .then(customers => (this.setState({customers})))
        .catch(err => console.warn(err));
  }
    
    render (){
      return(
        <TableCustomer rows = {this.state.customers}/>
      )
  }
}

export default Customers;
