import React, {Component} from 'react';
import TableCompany from './companyTable'

class Companies extends Component {

  constructor(){
    super();
    this.state = { companies: []};
    
  }
  componentDidMount() {
    
    fetch('http://localhost:5000/db/company')
      .then(response => response.json())
      .then(companies => (this.setState({companies})))
        .catch(err => console.warn(err));
  }
    
    render (){
      return(
        <TableCompany rows = {this.state.companies}/>
      )
  }
}

export default Companies;
