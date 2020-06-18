import React, {Component} from 'react';
import TableEmployee from './employeeTable'

class Employees extends Component {

  constructor(){
    super();
    this.state = { employees: []};
    
  }
  componentDidMount() {
    
    fetch('http://localhost:5000/db/employee')
      .then(response => response.json())
      .then(employees => (this.setState({employees})))
        .catch(err => console.warn(err));
  }
    
    render (){
      return(
        <TableEmployee rows = {this.state.employees}/>
      )
  }
}

export default Employees;
